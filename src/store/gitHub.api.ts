import { build } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle'
import { DefinitionType } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { AnyIfEmpty } from 'react-redux'
import { IUser, ServerResponse } from '../models/models'

export const login = 'vvspb'

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
                   per_page: 10
                }
            }),
            transformResponse: (response: ServerResponse<IUser>) => response.items
        }),
        getUserRepos: build.query<any, string>({
           query: (username: string) => ({
              url: `users/${username}/repos`
           })
        })
    })
})

export const {useSearchUsersQuery, useLazyGetUserReposQuery}= gitHubApi // кастомный хук для наших компонентов