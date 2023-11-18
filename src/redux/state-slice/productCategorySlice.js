import {createSlice} from "@reduxjs/toolkit";

export const productCategorySlice=createSlice({
    name:'productCategory',
    initialState:{
        List:[],
    },
    reducers:{
        SetProductCategoryList:(state,action)=>{
            state.List=action.payload
        },
    }
})
export  const {SetProductCategoryList}=productCategorySlice.actions;
export const selectProductCategoryList = (state) => state.productCategory.List;
export const productCategorySliceReducer = productCategorySlice.reducer;
