import { createSlice } from '@reduxjs/toolkit';

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartItems:[],
        cartTotal:0,
        cartTotalPrice:0,
    },
    reducers:{
        addToCart(state,payload){
            state.cartItems.push(action.payload)
        },
    },
})
export const {addToCart}=cartSlice.actions;
export default cartSlice.reducer
