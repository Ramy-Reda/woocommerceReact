import { createSlice } from '@reduxjs/toolkit'

export const appProduct = createSlice({
    name: 'conter',
    initialState: {
        sale : 0,
        nums : 0
    },
    reducers: {
        addPro : (state, action) => {
            state.sale = action.payload.sale;
        },

        Increment : (state) => {
            state.nums += 1;
        },
        Decrement : (state) => {
            state.nums -= 1;
        },
        IncrementBynums : (state, action) => {
            state.nums = action.payload;
        },toZiro : (state) => {
            state.nums = 0;
        }
    },
})

export const { addPro , Increment, Decrement, IncrementBynums, toZiro } = appProduct.actions;

export default appProduct.reducer;