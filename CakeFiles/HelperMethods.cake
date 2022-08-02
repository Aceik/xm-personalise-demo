#addin nuget:?package=Cake.Powershell&version=0.4.8&loaddependencies=true
#addin nuget:?package=Cake.Http&version=0.7.0

public class Configuration
{
  private MSBuildToolVersion _msBuildToolVersion;

  public string SolutionName {get; set;}
  public string ProjectName { get; set; }
  public string BuildProjectOrSolution { get; set; }
  public string BuildConfiguration {get; set;}
  public bool RunCleanBuilds {get; set;}
  public string ProjectFolder {get; set;}
  public string PublishTempFolder => $"{ProjectFolder}\\deploy";
  public string BuildToolVersions
  {
    set
    {
      if(!Enum.TryParse(value, out this._msBuildToolVersion)) {
        this._msBuildToolVersion = MSBuildToolVersion.Default;
      }
    }
  }
  public string SolutionFile {get; set;}
  public string ProjectFile {get; set;}
  public string MSBuildPath {get; set;}
  public bool OverrideMSBuildPath {get; set;}

  public MSBuildToolVersion MSBuildToolVersion => this._msBuildToolVersion;
  public string BuildTargets => this.RunCleanBuilds ? "Clean;Build" : "Build";
  public string SitecoreCLISecret {get; set;}
  public string CMHost { get; set; }
  public string IDHost { get; set; }
  public string CMHostFolder { get; set; }
  public string FEDFolder { get; set; }
  public string SitecoreAdminUser { get; set; }
  public string SitecoreAdminPassword { get; set; }  
}

public MSBuildSettings InitializeMSBuildSettings(MSBuildSettings settings)
{
  InitializeMSBuildSettingsInternal(settings);
  return settings;
}

private MSBuildSettings InitializeMSBuildSettingsInternal(MSBuildSettings settings)
{
  //Information($"BuildConfiguration : {configuration.BuildConfiguration}");
  //if(Environment.UserInteractive) {	
    //Console.WriteLine("Starting Build ... Press <ENTER> when you are ready ...");
	//var name = Console.ReadLine();
  //}

  settings.SetConfiguration(configuration.BuildConfiguration)
    .SetVerbosity(Verbosity.Minimal)
    .SetMSBuildPlatform(MSBuildPlatform.Automatic)
    .SetPlatformTarget(PlatformTarget.MSIL)
    .UseToolVersion(configuration.MSBuildToolVersion)
    .WithRestore()
    .SetMaxCpuCount(1);
    
    if(configuration.OverrideMSBuildPath)
    {
      //This is added to workaround the non default installation path 
      settings.ToolPath = configuration.MSBuildPath;
    }
    
  return settings;
}

public void SyncFolders(string sourceFolder, string destinationFolder)
{
	SyncFolders(sourceFolder, destinationFolder, true);
}

public void SyncFolders(string sourceFolder, string destinationFolder, bool mirror)
{
  
  EnsureDirectoryExists(destinationFolder);

  StartPowershellScript("robocopy", args => {
	if(mirror) {
		args.Append("/MIR");
	} else {
		args.Append("/s");
    }
	
    args.AppendQuoted(sourceFolder);
    args.AppendQuoted(destinationFolder);
    args.Append("/xf *.md");
    args.Append("/xf *.transform");
    args.Append("/xf *.debug.config");
    args.Append("/xf *.release.config");
});

}


public void WarmupURL(string url)
{
  var retryCount = 10;

  while(retryCount > 0)
  {
    try
    {
      var response = HttpGet(url);
      //Exit when we receive a 200 response
      retryCount = 0;
    }
    catch (System.Exception)
    {
      retryCount--;
      System.Threading.Thread.Sleep(5000);
      Information($"Waiting for URL to warm up. Attempts left : {retryCount}");
    }
  }
}