#load local:?path=CakeFiles/HelperMethods.cake
#addin nuget:?package=Newtonsoft.Json&version=12.0.2
#addin nuget:?package=Cake.Json&version=5.2.0
#addin nuget:?package=Cake.XdtTransform&version=0.18.0&loaddependencies=true
#addin nuget:?package=Cake.Powershell&version=0.4.8&loaddependencies=true

var target = Argument("target", "Build");
var configuration = new Configuration();

//////////////////////////////////////////////////////////////////////
// TASKS
//////////////////////////////////////////////////////////////////////

Setup(context => {
    Information("Running setup....");
    var configFile = new FilePath("build-config.json");

    

    if(target == "CI-Build")
        configFile = new FilePath("build-config-ci.json");

    configuration = DeserializeJsonFromFile<Configuration>(configFile);

    Information("MSBuild Path ...." + configuration.MSBuildPath);
	
	var solutionFile = GetFiles($".\\{ configuration.SolutionName }").First();
	var directoryPath = solutionFile.GetDirectory().FullPath;
	configuration.ProjectFolder = directoryPath;
	configuration.SolutionFile = solutionFile.FullPath;
	
    Information("BuildProjectOrSolution ...." + configuration.BuildProjectOrSolution);

	if (configuration.BuildProjectOrSolution == "Project")
	{
		var projectFile = GetFiles($".\\**\\{ configuration.ProjectName }").First();
		configuration.ProjectFile = projectFile.FullPath;
	}

});


Task("RestoreSitecoreCLI")
    .Does(() => {
        StartPowershellScript("dotnet", args => {
            args.Append("tool");
            args.Append("restore");
            args.Append("--add-source");
            args.Append("https://sitecore.myget.org/F/sc-packages/api/v3/index.json");
        });
    });

Task("Clean")
    .Does(() =>
    {        
        CleanDirectory($"./deploy");
    });

Task("RestoreNuget")
    .Does(() =>
	{
		NuGetRestore(configuration.SolutionFile, new NuGetRestoreSettings { NoCache = true });
	});
	
Task("Build")
    .IsDependentOn("Clean")
	.IsDependentOn("RestoreNuget")
    .Does(() =>
    {        
        if (configuration.BuildProjectOrSolution != "Project")
        {
            Information("Building Solution ...");
            MSBuild(configuration.SolutionFile, cfg => InitializeMSBuildSettings(cfg));
        }
        else
        {
            Information("Building Project ...");
            MSBuild(configuration.ProjectFile, cfg => InitializeMSBuildSettings(cfg));
        }
    });

Task("Publish")
    .IsDependentOn("Build")
    .Does(() =>
    {     
        var tempFolder = $"{ configuration.PublishTempFolder }\\temp";
        var buildSettings = InitializeMSBuildSettings(new MSBuildSettings())       
            .WithProperty("OutDir", tempFolder)
            .WithProperty("DeployOnBuild", "true")
            .WithProperty("DeployDefaultTarget", "WebPublish")
            .WithProperty("WebPublishMethod", "FileSystem")
            .WithProperty("publishUrl", tempFolder)
            .WithProperty("DeleteExistingFiles", "false");
        
        if (configuration.BuildProjectOrSolution != "Project")
        {
            Information("Publishing Solution ...");
            MSBuild(configuration.SolutionFile, buildSettings);
        }
        else
        {
            Information("Publishing Project ...");
            MSBuild(configuration.ProjectFile, buildSettings);
        }

        //Cleanup configs in bin folder
        DeleteFiles($"{ tempFolder }\\bin\\*.config");
        DeleteFiles($"{ tempFolder }\\bin\\*.transform");
        DeleteDirectory($"{ tempFolder }\\bin\\roslyn", new DeleteDirectorySettings {
            Recursive = true,
            Force = true
        });
        DeleteDirectory($"{ tempFolder }\\bin\\app_config", new DeleteDirectorySettings {
            Recursive = true,
            Force = true
        });
        DeleteFiles($"{ tempFolder }\\bin\\*System.Web*");
        DeleteFiles($"{ tempFolder }\\bin\\*Microsoft*");
        DeleteFiles($"{ tempFolder }\\*.dll");
        DeleteFiles($"{ tempFolder }\\*.dll.config");
        DeleteFiles($"{ tempFolder }\\*.xml");
    });


Task("PrepareCM")
    .IsDependentOn("Publish")
    .Does(() => 
    {
        var cmFolder = $"{configuration.PublishTempFolder}\\cm";
        var files = GetFiles($"{ configuration.PublishTempFolder }\\temp\\**\\*")
                        .Where(f => !f.FullPath.ToLower().Contains("_publishedwebsites"))
                        .Where(f => !f.GetExtension().ToLower().Equals(".pdb"));

        EnsureDirectoryExists(cmFolder);
        CopyFiles(files, cmFolder, preserveFolderStructure: true);
    });

Task("PrepareCD")
    .IsDependentOn("Publish")
    .Does(() => 
    {
        var cdFolder = $"{configuration.PublishTempFolder}\\cd";
        var files = GetFiles($"{ configuration.PublishTempFolder }\\temp\\**\\*")
                        .Where(f => !f.FullPath.ToLower().Contains("_publishedwebsites"))
                        .Where(f => !f.GetExtension().ToLower().Equals(".pdb"));

        EnsureDirectoryExists(cdFolder);
        CopyFiles(files, cdFolder, preserveFolderStructure: true);
    });

Task("DeployToLocal")  
    .IsDependentOn("PrepareCM")        
    .Does(() => {
			
        var hostFolder = $"{ configuration.CMHostFolder }";
        var publishFolder = $"{ configuration.PublishTempFolder }\\cm";
		
		Console.WriteLine($"hostFolder: { hostFolder }");
		Console.WriteLine($"publishFolder: { publishFolder }");

        SyncFolders(publishFolder, hostFolder, false);
    });
	
Task("Default")
    .IsDependentOn("RestoreSitecoreCLI")
    .IsDependentOn("DeployToLocal");    


Task("Publish-Serialization")    
    .Does(() => {
        var serializationFilesFilter = $@"{configuration.ProjectFolder}\src\**\serialization\**\*.yml";        
        var destination = $@"{configuration.PublishTempFolder}\\cm\\Unicorn"; //only include unicorn ymls in the CM artifact        
        Information($"Filter: {serializationFilesFilter} - Destination: {destination}");

        Func<IFileSystemInfo, bool> exclude_build_folder = fileSystemInfo => (!fileSystemInfo.Path.FullPath.Contains("deploy"));

        try
        {
            var files = GetFiles(serializationFilesFilter,new GlobberSettings{Predicate = exclude_build_folder})
                            .Select( x => x.FullPath).ToList();
                        
            foreach (var file in files)
            {
                var sourcePath = new FilePath(file);                                
                var destinationPath = new FilePath(file.Replace(configuration.ProjectFolder, destination));                

                if(!DirectoryExists(destinationPath.GetDirectory().FullPath))
                    CreateDirectory(destinationPath.GetDirectory().FullPath);

                CopyFile(sourcePath, destinationPath);
            }

        }
        catch (System.Exception ex)
        {
            Error($"ERROR: {ex.Message}. STACKTRACE: { ex.StackTrace }");
        }
    });

Task("CI-Build")
    .IsDependentOn("Publish")        
    .IsDependentOn("PrepareCM")      
    .IsDependentOn("Publish-Serialization")  
    .IsDependentOn("PrepareCD")  
    .Does(() => {
    });

//////////////////////////////////////////////////////////////////////
// EXECUTION
//////////////////////////////////////////////////////////////////////

RunTarget(target);