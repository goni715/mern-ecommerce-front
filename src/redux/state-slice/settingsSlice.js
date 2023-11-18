import {createSlice} from "@reduxjs/toolkit";

export const settingsSlice=createSlice({

    name:'settings',
    initialState:{
        loader:"d-none",
        loading:false,
    },
    reducers:{
        ShowLoader:(state)=>{
            state.loader=""
        },
        HideLoader:(state)=>{
            state.loader="d-none"
        },
        ShowLoading:(state)=>{
            state.loading=true
        },
        HideLoading:(state)=>{
            state.loading=false
        },
    }

})

export  const {ShowLoader,HideLoader,ShowLoading,HideLoading}=settingsSlice.actions;
export const selectLoader = (state) => state.settings.loader;
export const selectLoading = (state) => state.settings.loading;
export const settingsSliceReducer = settingsSlice.reducer;