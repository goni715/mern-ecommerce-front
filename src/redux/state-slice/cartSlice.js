import {createSlice} from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:'cart',
    initialState:{
        List:[],
        CartProductColor: "",
        TotalAmount:""
    },
    reducers:{
        SetCartList:(state,action)=>{
            state.List=action.payload
        },
        SetCartProductColor:(state,action)=>{
            state.CartProductColor=action.payload
        },
        SetTotalAmount:(state,action)=>{
            state.TotalAmount=action.payload
        },
    }
})
export  const {SetCartList,SetCartProductColor, SetTotalAmount}=cartSlice.actions;

export const selectCartList = (state) => state.cart.List;
export const selectCartProductColor = (state) => state.cart.CartProductColor;
export const selectTotalAmount = (state) => state.cart.TotalAmount;

export const cartSliceReducer = cartSlice.reducer;
