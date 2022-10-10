import { configureStore } from "@reduxjs/toolkit";
import { gitHubApi } from "./gitHub.api";
import gitHubSlice from "./gitHub.slice";

export const store = configureStore({
    reducer: {
     [gitHubApi.reducerPath]: gitHubApi.reducer,
     userInfo: gitHubSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch