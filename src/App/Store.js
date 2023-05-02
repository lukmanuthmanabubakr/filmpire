import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { tmdbApi } from "../component/Services/Tmdb";

export default configureStore({
    reducer:{
        [tmdbApi.reducerPath]: tmdbApi.reducer
    },
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware().concat(tmdbApi.middleware)
})