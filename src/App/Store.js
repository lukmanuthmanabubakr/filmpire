import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import genreOrCategoryReducer from '../Features/CurrentGenresOrCategory'
import userReducer from '../Features/auth'

import { tmdbApi } from "../component/Services/TMDB";

export default configureStore({
    reducer:{
        [tmdbApi.reducerPath]: tmdbApi.reducer,
        currentGenreOrCategory:genreOrCategoryReducer,
        user:userReducer
    },
    middleware:(getDefaultMiddleware) => 
    getDefaultMiddleware().concat(tmdbApi.middleware)
})