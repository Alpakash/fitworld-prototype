package patches.vcsRoots

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.ui.*
import jetbrains.buildServer.configs.kotlin.v2019_2.vcs.GitVcsRoot

/*
This patch script was generated by TeamCity on settings change in UI.
To apply the patch, create a vcsRoot with id = 'Develop'
in the root project, and delete the patch script.
*/
create(DslContext.projectId, GitVcsRoot({
    id("Develop")
    name = "develop"
    url = "https://gitlab.com/fitworld/fitworld-frontend.git"
    branch = "refs/heads/develop"
    authMethod = password {
        userName = "akash.soedamah@gmail.com"
        password = "credentialsJSON:0ad31948-1f5f-4512-b584-73a02053bf0e"
    }
}))

