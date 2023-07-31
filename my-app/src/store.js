import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../src/features/counter/counterSlice.js'
import bonusReducer from '../src/features/counter/bonusSlice.js'
import { adminApi } from './api/adminSlice.js'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        bonus: bonusReducer,
        [adminApi.reducerPath]: adminApi.reducer// [] me h qki jab key dete h to uski value extract krnek liye []dena pdta h
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(adminApi.middleware),

})