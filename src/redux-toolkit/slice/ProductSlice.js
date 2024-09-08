import { createSlice } from "@reduxjs/toolkit";



export const ProductSlice = createSlice({
    initialState : [],
    name : 'Counter',
    reducers : {
        addToCart:(state,action) => {
            state.push(action.payload)
        },
        removeFromCart:(state,action) => {
           return state.filter((ele) => ele?.id !== action?.payload)
        }
    }
})

export const {addToCart, removeFromCart} = ProductSlice.actions;

export default ProductSlice.reducer