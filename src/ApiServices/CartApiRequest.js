

import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settingsSlice";
import {BaseURL} from "../helper/config";
import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/ValidationHelper";
import {getToken} from "../helper/SessionHelper";
import {SetCartList, SetTotalAmount} from "../redux/state-slice/cartSlice";
const AxiosHeader={headers:{"token":getToken()}}


//Add Product To Cart
export async function AddProductToCartRequest(productID, Quantity, colorID){

    try{
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/AddToCart";
        let PostBody={
            ProductID: productID,
            quantity: Quantity,
            ColorID: colorID
        }
        let res =await axios.post(URL,PostBody, AxiosHeader)
        store.dispatch(HideLoader())
        if(res.status === 200) {
            if(res.data['status'] === "success"){
                SuccessToast("Product Added to Cart");
                return true;
            }
            else{
                ErrorToast("Rquest Fail, Try Again!");
                return false;
            }
        }
        else{
            ErrorToast("Something Went Wrong");
            return false;
        }
    }
    catch(e){
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong");
        if(e['message'] === "Request failed with status code 401"){
            localStorage.clear();
            setTimeout(()=>{
                window.location.href="/";
            },1000)
        }
        return false;
    }
}





//Cart tList
export async function CartListRequest() {

    try {
        //store.dispatch(ShowLoader())
        let URL = BaseURL+"/GetUserCart";
        const res = await axios.get(URL,AxiosHeader)
        //store.dispatch(HideLoader())

        if (res.status === 200 && res.data['status'] === "success") {
            if (res.data['data'].length > 0) {
                store.dispatch(SetCartList(res.data['data']))
                return res.data['data'];
            } else {
                store.dispatch(SetCartList([]))
                store.dispatch(SetTotalAmount(""));
                return res.data['data'];
            }
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        //store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong");
        if(e['message'] === "Request failed with status code 401"){
            localStorage.clear();
            setTimeout(()=>{
                window.location.href="/";
            },1000)
        }
    }
}




//Remove Product From Cart
export async function RemoveProductFromCartRequest(ObjectID) {
    try {
        //store.dispatch(ShowLoader())
        let URL = BaseURL+"/RemoveProductFromCart";
        let PostBody={
            cartItemID: ObjectID
        }
        const result = await axios.post(URL, PostBody, AxiosHeader);
        //store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            //SuccessToast("Product Removed From Cart");
            return true
        }
        else {
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        //store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
        if(e['message'] === "Request failed with status code 401"){
            localStorage.clear();
            setTimeout(()=>{
                window.location.href="/";
            },1000)
        }

        return  false
    }
}




//Update Product Quantity From Cart

export async function UpdateProductQuantityFromCartRequest(Quantity, ObjectID) {

    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/UpdateProductQuantityFromCart";
        let PostBody={
            cartItemID: ObjectID,
            quantity: Quantity
        }
        const res = await axios.put(URL,PostBody,AxiosHeader)
        store.dispatch(HideLoader())
        if (res.status === 200){
            if (res.data['status'] === "success") {
                //SuccessToast("Cart Update Success");
                return true;
            }else{
                ErrorToast("Something Went Wrong")
                return false;
            }
        }
        else {
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
        if(e['message'] === "Request failed with status code 401"){
            localStorage.clear();
            setTimeout(()=>{
                window.location.href="/";
            },1000)
        }
        return false;
    }
}








//Remove Product From Cart
export async function DeleteUserCartRequest() {
    try {
        //store.dispatch(ShowLoader())
        let URL = BaseURL+"/DeleteUserCart";
        const result = await axios.get(URL, AxiosHeader);
        //store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            //SuccessToast("Cart Delete Success");
            store.dispatch(SetCartList([]))
            store.dispatch(SetTotalAmount(""));
            return true;
        }
        else {
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        //store.dispatch(HideLoader())
        if(e['message'] === "Request failed with status code 401"){
            localStorage.clear();
            setTimeout(()=>{
                window.location.href="/";
            },1000)
        }
        return  false
    }
}












