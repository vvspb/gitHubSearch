import { build } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle'
import { DefinitionType } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { AnyIfEmpty } from 'react-redux'
import { ICommit, IRepo, IUser, ServerResponse } from '../models/models'

export const gitHubApi = createApi({
    reducerPath: 'gitHub/api',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://api.github.com/'
    }),
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({
            query: (search: string) => ({
                url: `search/users`,
                params: {
                   q: search,
                   per_page: 15
                }
            }),
            transformResponse: (response: ServerResponse<IUser>) => response.items
        }),
        getUserRepos: build.query<IRepo[], string>({
           query: (username: string) => ({
              url: `users/${username}/repos`
           })
        }),
        getRepoCommits: build.query<ICommit[], string[]>({
            query: (userRepo: string[]) => ({
               url: `repos/${userRepo[0]}/${userRepo[1]}/commits`
            })
         })
    })
})

export const {useSearchUsersQuery, useGetUserReposQuery, useGetRepoCommitsQuery}= gitHubApi // кастомный хук для наших компонентов