import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../src/features/counter/counterSlice.js'
import bonusReducer from '../src/features/counter/bonusSlice.js'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        bonus: bonusReducer
    },
})