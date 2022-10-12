import { configureStore } from "@reduxjs/toolkit";
import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { gitHubApi } from "./gitHub.api";
import gitHubSlice from "./gitHub.slice";

export const store = configureStore({
    reducer: {
     [gitHubApi.reducerPath]: gitHubApi.reducer,
     userInfo: gitHubSlice,
    },
    middleware: GetDefaultMiddleware => GetDefaultMiddleware().concat(gitHubApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch