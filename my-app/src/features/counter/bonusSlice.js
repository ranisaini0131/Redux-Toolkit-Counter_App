import { createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
    point: 10,
}

const incrementByAmt = createAction('counter/incrementByAmount')

export const bonusSlice = createSlice({
    name: 'bonus',
    initialState,
    reducers: {
        increment: (state) => {
            state.point += 1
        }
    },

    extraReducers: (builder) => {
        builder.addCase(incrementByAmt, (state, action) => {
            if (action.payload >= 100) {
                state.point++;
            }
        })
    }
})

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions

export default bonusSlice.reducer