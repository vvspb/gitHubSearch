import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface GitHubSate {
    userInfo: {
        login: string
        avatar_url: string
    }
    repoName: string
}

const initialState: GitHubSate = {
    userInfo: {
        'login': '',
        'avatar_url': '',
    },
    repoName: ''
}

export const gitHubSlice = createSlice({
    name: 'gitHub',
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<{       
            login: string
            avatar_url: string
        }>) => {
            state.userInfo = action.payload
        },
        setRepoCommits: (state, action: PayloadAction<string>) => {
            state.repoName = action.payload
        },
    },
})

export const { setUserInfo, setRepoCommits } = gitHubSlice.actions
export default gitHubSlice.reducer