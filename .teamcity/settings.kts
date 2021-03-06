import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.script
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.vcs

/*
The settings script is an entry point for defining a TeamCity
project hierarchy. The script should contain a single call to the
project() function with a Project instance or an init function as
an argument.

VcsRoots, BuildTypes, Templates, and subprojects can be
registered inside the project using the vcsRoot(), buildType(),
template(), and subProject() methods respectively.

To debug settings scripts in command-line, run the

    mvnDebug org.jetbrains.teamcity:teamcity-configs-maven-plugin:generate

command and attach your debugger to the port 8000.

To debug in IntelliJ Idea, open the 'Maven Projects' tool window (View
-> Tool Windows -> Maven Projects), find the generate task node
(Plugins -> teamcity-configs -> teamcity-configs:generate), the
'Debug' option is available in the context menu for the task.
*/

version = "2019.2"

object BuildDevelop : BaseBuild("+:develop", "prod", "Develop")
object BuildProd : BaseBuild("+:<default>", "prod", "Prod")

project {
    buildType(BuildDevelop)
    buildType(BuildProd)
}

open class BaseBuild(val branchFilterValue: String, val environment: String, val buildName: String) : BuildType({
    name = "Build$buildName"

    steps {
        // Web
        script {
            name = "[WEB] Compile source code"
            scriptContent = "cd web " +
                    "&& rm -rf build " +
                    "&& npm i " +
                    "&& npm run build"
        }
        script {
            name = "[WEB] Upload to S3 development bucket"
            scriptContent = "cd web/build " +
                    "&& AWS_PROFILE=${environment} aws s3 cp . s3://${DslContext.projectName}-${environment} --recursive"
        }
        script {
            name = "[WEB] Cleanup"
            scriptContent = "rm -rf web/build"
        }

        // MobileAndroid
        // MobileIos
    }

    vcs {
        root(DslContext.settingsRoot)
    }

    triggers {
        vcs {
            branchFilter = branchFilterValue
        }
    }
})

