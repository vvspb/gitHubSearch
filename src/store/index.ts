import { configureStore } from "@reduxjs/toolkit";
import { gitHubApi } from "./gitHub.api";

export const store = configureStore({
    reducer: {
     [gitHubApi.reducerPath]: gitHubApi.reducer
    }
})