import {createSlice} from "@reduxjs/toolkit";

export const orderSlice=createSlice({
    name:'order',
    initialState:{
        List:[],
    },
    reducers:{
        SetMyOrderList:(state,action)=>{
            state.List=action.payload
        },
    }
})
export  const {SetMyOrderList}=orderSlice.actions;
export const selectMyOrderList = (state) => state.order.List;

export const orderSliceReducer = orderSlice.reducer;
