import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    value: 10,
}

export const getUserByAccount = createAsyncThunk(
    'counter/getUser',
    async (userId, thunkAPI) => {
        const { data } = await axios.get(`http://localhost:3000/accounts/${userId}`)
        return data.amount;
    }
)

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },

    extraReducers: (builder) => {
        builder.addCase(getUserByAccount.fulfilled, (state, action) => {
            state.value = action.payload
            state.pending = false
        })
            .addCase(getUserByAccount.fulfilled, (state, action) => {
                state.pending = true
            })
            .addCase(getUserByAccount.fulfilled, (state, action) => {
                state.error = action.error
            })

    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer