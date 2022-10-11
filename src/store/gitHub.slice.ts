import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../models/models"


interface GitHubSate {
    userInfo: IUser
    repoName: string
}

const initialState: GitHubSate = {
    userInfo: {
        "login": "Имя",
        "id": 3742464,
        "node_id": "MDQ6VXNlcjM3NDI0NjQ=",
        "avatar_url": "https://avatars.githubusercontent.com/u/3742464?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/VlADIm",
        "html_url": "https://github.com/VlADIm",
        "followers_url": "https://api.github.com/users/VlADIm/followers",
        "following_url": "https://api.github.com/users/VlADIm/following{/other_user}",
        "gists_url": "https://api.github.com/users/VlADIm/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/VlADIm/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/VlADIm/subscriptions",
        "organizations_url": "https://api.github.com/users/VlADIm/orgs",
        "repos_url": "https://api.github.com/users/VlADIm/repos",
        "events_url": "https://api.github.com/users/VlADIm/events{/privacy}",
        "received_events_url": "https://api.github.com/users/VlADIm/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1.0
      },
         repoName: ''
}

export const gitHubSlice = createSlice({
    name: 'gitHub',
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<IUser>) => {
            state.userInfo = action.payload
        },

        setRepoCommits: (state, action: PayloadAction<string>) => {
            state.repoName = action.payload
        },
    },
})

export const { setUserInfo, setRepoCommits } = gitHubSlice.actions
export default gitHubSlice.reducer