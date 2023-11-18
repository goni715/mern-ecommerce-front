import {createSlice} from "@reduxjs/toolkit";

export const brandSlice=createSlice({
    name:'brand',
    initialState:{
        List:[],
    },
    reducers:{
        SetBrandList:(state,action)=>{
            state.List=action.payload
        },
        SetBrandName:(state,action)=>{
            state.BrandName=action.payload
        }
    }
})
export  const {SetBrandList}=brandSlice.actions;
export const selectBrandList = (state) => state.brand.List;
export const brandSliceReducer = brandSlice.reducer;
