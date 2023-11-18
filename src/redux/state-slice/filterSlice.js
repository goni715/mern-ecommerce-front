import {createSlice} from "@reduxjs/toolkit";

export const filterSlice=createSlice({
    name:'filter',
    initialState:{
        List:[],
        searchValue:0,
        letter:0,
        price:0,
        date:0,
        category:0,
        fromPrice:0,
        toPrice:0,
        empty:"empty",
        MinPrice:0,//fromPrice
        MaxPrice:0//toPrice

    },
    reducers:{
        SetFilterProducts:(state,action)=>{
            state.List=action.payload
        },
        SetSearchValue:(state,action)=>{
            state.searchValue=action.payload
        },
        SetFilterLetter:(state,action)=>{
            state.letter=action.payload
        },
        SetFilterPrice:(state,action)=>{
            state.price=action.payload
        },
        SetFilterDate:(state,action)=>{
            state.date=action.payload
        },
        SetFilterCategory:(state,action)=>{
            state.category=action.payload
        },
        SetFromPrice:(state,action)=>{
            state.fromPrice=action.payload
        },
        SetToPrice:(state,action)=>{
            state.toPrice=action.payload
        },
        SetEmpty:(state,action)=>{
            state.empty=action.payload
        },
        SetMinPrice:(state,action)=>{
            state.MinPrice=action.payload
        },
        SetMaxPrice:(state,action)=>{
            state.MaxPrice=action.payload
        }

    }
})
export  const {SetFilterProducts, SetSearchValue, SetFilterLetter, SetFilterPrice, SetFilterDate, SetFromPrice, SetToPrice, SetFilterCategory, SetEmpty, SetMinPrice, SetMaxPrice}=filterSlice.actions;
export const selectFilterProducts = (state) => state.filter.List;
export const selectSearchValue = (state) => state.filter.searchValue;
export const selectFilterLetter = (state) => state.filter.letter;
export const selectFilterPrice = (state) => state.filter.price;
export const selectFilterDate = (state) => state.filter.date;
export const selectFilterCategory = (state) => state.filter.category;
export const selectFromPrice = (state) => state.filter.fromPrice;
export const selectToPrice = (state) => state.filter.toPrice;
export const selectEmpty = (state) => state.filter.empty;
export const selectMinPrice = (state) => state.filter.MinPrice;
export const selectMaxPrice = (state) => state.filter.MaxPrice;

export const filterSliceReducer = filterSlice.reducer;
