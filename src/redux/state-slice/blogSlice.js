import {createSlice} from "@reduxjs/toolkit";

export const blogSlice=createSlice({
    name:'blog',
    initialState:{
        List:[],
        FilterBlogs:[],
        CategoryID:"",
        BlogName: "",
        BlogDesc: "",
        BlogImage:[],
    },
    reducers:{
        SetBlogList:(state,action)=>{
            state.List=action.payload
        },
        SetFilterBlogs:(state,action)=>{
            state.FilterBlogs=action.payload
        },
        SetBlogCategoryID:(state,action)=>{
            state.CategoryID=action.payload
        },
        SetBlogName:(state,action)=>{
            state.BlogName=action.payload
        },
        SetBlogDesc:(state,action)=>{
            state.BlogDesc=action.payload
        },
        SetBlogImage:(state,action)=>{
            state.BlogImage=action.payload
        },
    }
})
export  const {SetBlogList, SetBlogImage, SetBlogCategoryID, SetBlogName, SetBlogDesc, SetFilterBlogs}=blogSlice.actions;
export const selectBlogList = (state) => state.blog.List;
export const selectBlogCategoryID = (state) => state.blog.CategoryID;
export const selectBlogName = (state) => state.blog.BlogName;
export const selectBlogDesc = (state) => state.blog.BlogDesc;
export const selectBlogImage = (state) => state.blog.BlogImage;
export const selectFilterBlogs = (state) => state.blog.FilterBlogs;

export const blogSliceReducer = blogSlice.reducer;
