import {createSlice} from "@reduxjs/toolkit";

export const productSlice=createSlice({
    name:'product',
    initialState:{
        List:[],
        CategoryName:"",
        BrandName:"",
        ProductName: "",
        ProductID: "",
        ProductQuantity: "",
        ProductPrice: "",
        ProductDesc: "",
        ProductColor:[],
        ProductTag:"",
        ProductImage:[],
        SelectedImage: "",
        Wishlist:[],
        TotalRating:null,
        Ratings:[],
        PopularProduct:[],
        SpecialProduct:[],
        FeatureProduct:[],
        Star:0

    },
    reducers:{
        SetProductList:(state,action)=>{
            state.List=action.payload
        },
        SetCategoryName:(state,action)=>{
            state.CategoryName=action.payload
        },
        SetBrandName:(state,action)=>{
            state.BrandName=action.payload
        },
        SetProductName:(state,action)=>{
            state.ProductName=action.payload
        },
        SetProductQuantity:(state,action)=>{
            state.ProductQuantity=action.payload
        },
        SetProductPrice:(state,action)=>{
            state.ProductPrice=action.payload
        },
        SetProductDesc:(state,action)=>{
            state.ProductDesc=action.payload
        },
        SetProductColor:(state,action)=>{
            state.ProductColor=action.payload
        },
        SetProductTag:(state,action)=>{
            state.ProductTag=action.payload
        },
        SetProductImage:(state,action)=>{
            state.ProductImage=action.payload
        },
        SetWishlist:(state,action)=>{
            state.Wishlist=action.payload
        },
        SetSelectedImage:(state,action)=>{
            state.SelectedImage=action.payload
        },
        SetTotalRating:(state,action)=>{
            state.TotalRating=action.payload
        },
        SetRatings:(state,action)=>{
            state.Ratings=action.payload
        },
        SetProductID:(state,action)=>{
            state.ProductID=action.payload
        },
        SetPopularProduct:(state,action)=>{
            state.PopularProduct=action.payload
        },
        SetSpecialProduct:(state,action)=>{
            state.SpecialProduct=action.payload
        },
        SetFeatureProduct:(state,action)=>{
            state.FeatureProduct=action.payload
        },
        SetStar:(state,action)=>{
            state.Star=action.payload
        },

    }
})
export  const {SetProductList, SetBrandName, SetCategoryName, SetProductName, SetProductQuantity, SetProductPrice, SetProductDesc, SetProductColor, SetProductTag, SetProductImage, SetWishlist, SetSelectedImage, SetTotalRating, SetProductID, SetPopularProduct, SetSpecialProduct, SetFeatureProduct, SetRatings, SetStar}=productSlice.actions;
export const selectProductList = (state) => state.product.List;
export const selectProductName = (state) => state.product.ProductName;
export const selectCategoryName = (state) => state.product.CategoryName;
export const selectBrandName = (state) => state.product.BrandName;
export const selectProductQuantity = (state) => state.product.ProductQuantity;
export const selectProductPrice = (state) => state.product.ProductPrice;
export const selectProductDesc = (state) => state.product.ProductDesc;
export const selectProductColor = (state) => state.product.ProductColor;
export const selectProductTag = (state) => state.product.ProductTag;
export const selectProductImage = (state) => state.product.ProductImage;
export const selectSelectedImage = (state) => state.product.SelectedImage;
export const selectColorID = (state) => state.product.ColorID;
export const selectWishlist = (state) => state.product.Wishlist;
export const selectTotalRating = (state) => state.product.TotalRating;
export const selectRatings = (state) => state.product.Ratings;
export const selectProductID = (state) => state.product.ProductID;
export const selectPopularProduct = (state) => state.product.PopularProduct;
export const selectSpecialProduct = (state) => state.product.SpecialProduct;
export const selectFeatureProduct = (state) => state.product.FeatureProduct;
export const selectStar = (state) => state.product.Star;

export const productSliceReducer = productSlice.reducer;
