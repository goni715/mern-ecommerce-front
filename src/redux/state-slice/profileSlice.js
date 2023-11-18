import {createSlice} from "@reduxjs/toolkit";
export const profileSlice=createSlice({
    name:'profile',
    initialState:{
        email:"",
        firstName:"",
        lastName:"",
        mobile:""
    },
    reducers:{
        SetProfileEmail:(state,action)=>{
            state.email=action.payload
        },
        SetProfileFirstName:(state,action)=>{
            state.firstName=action.payload
        },
        SetProfileLastName:(state,action)=>{
            state.lastName=action.payload
        },
        SetProfileMobile:(state,action)=>{
            state.mobile=action.payload
        }

    }
})
export  const {SetProfileEmail, SetProfileFirstName, SetProfileLastName, SetProfileMobile}=profileSlice.actions;
export const selectProfileEmail = (state) => state.profile.email;
export const selectProfileFirstName = (state) => state.profile.firstName;
export const selectProfileLastName = (state) => state.profile.lastName;
export const selectProfileMobile = (state) => state.profile.mobile;
export const profileSliceReducer = profileSlice.reducer;
