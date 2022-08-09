##########################################################################
# This powershell is used to perform sync of sitecore serialization
##########################################################################

<#

.SYNOPSIS
This powershell is used to perform sync of sitecore serialization

.DESCRIPTION
This powershell is used to perform sync of sitecore serialization

.PARAMETER CMHost
The build script to execute.
.PARAMETER IDHost
The build script target to run.
.PARAMETER CLISecret
The build configuration to use.

#>

[CmdletBinding()]
Param(
    [string]$CMHost,
    [string]$IDHost,
    [string]$CLISecret
)


## TODO******
## Replace this with Unicorn Remote Sync commands


#Login to sitecore using CLI
#dotnet sitecore login --authority $IDHost --cm $CMHost --allow-write true --client-credentials true --client-id SitecoreCLIServer --client-secret $CLISecret

#Pull serialization changes from sitecore
#dotnet sitecore ser pull