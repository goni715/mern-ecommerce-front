import {configureStore} from "@reduxjs/toolkit";
import {modalSliceReducer} from "../state-slice/ModalSlice";
import {brandSliceReducer} from "../state-slice/brandSlice";
import {blogSliceReducer} from "../state-slice/blogSlice";
import {colorSliceReducer} from "../state-slice/colorSlice";
import {couponSliceReducer} from "../state-slice/couponSlice";
import {productCategorySliceReducer} from "../state-slice/productCategorySlice";
import {productSliceReducer} from "../state-slice/productSlice";
import {settingsSliceReducer} from "../state-slice/settingsSlice";
import {blogCategorySliceReducer} from "../state-slice/blogCategorySlice";
import {orderSliceReducer} from "../state-slice/orderSlice";
import {uploadSliceReducer} from "../state-slice/uploadSlice";
import {cartSliceReducer} from "../state-slice/cartSlice";
import {profileSliceReducer} from "../state-slice/profileSlice";
import {filterSliceReducer} from "../state-slice/filterSlice";


export default configureStore({

    reducer:{
        settings:settingsSliceReducer,
        modal:modalSliceReducer,
        brand:brandSliceReducer,
        blog:blogSliceReducer,
        color:colorSliceReducer,
        coupon:couponSliceReducer,
        productCategory: productCategorySliceReducer,
        product: productSliceReducer,
        blogCategory: blogCategorySliceReducer,
        order:orderSliceReducer,
        upload: uploadSliceReducer,
        cart: cartSliceReducer,
        profile: profileSliceReducer,
        filter:filterSliceReducer
    }
})