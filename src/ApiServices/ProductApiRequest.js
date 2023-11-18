
import store from "../redux/store/store";
import {HideLoader, HideLoading, ShowLoader, ShowLoading} from "../redux/state-slice/settingsSlice";
import {BaseURL} from "../helper/config";
import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/ValidationHelper";
import {getToken} from "../helper/SessionHelper";
import {
    SetBrandName,
    SetCategoryName,
    SetFeatureProduct,
    SetPopularProduct,
    SetProductColor,
    SetProductDesc,
    SetProductID,
    SetProductImage,
    SetProductList,
    SetProductName,
    SetProductPrice,
    SetProductQuantity,
    SetProductTag, SetRatings,
    SetSelectedImage,
    SetSpecialProduct,
    SetTotalRating,
    SetWishlist
} from "../redux/state-slice/productSlice";
import {SetFilterProducts} from "../redux/state-slice/filterSlice";
const AxiosHeader={headers:{"token":getToken()}}



//ProductList
export async function ProductListRequest() {

    try {
        //store.dispatch(ShowLoader())
        let URL = BaseURL+"/GetAllProducts/"+0;
        const res = await axios.get(URL,AxiosHeader)
        //store.dispatch(HideLoader())

        if (res.status === 200 && res.data['status'] === "success") {
            if (res.data['data'].length > 0) {
                store.dispatch(SetProductList(res.data['data']))
                let popularProducts = res.data['data'].filter((currentValue)=>currentValue.tags === "Popular");
                store.dispatch(SetPopularProduct(popularProducts));
                let specialProducts = res.data['data'].filter((currentValue)=>currentValue.tags === "Special");
                store.dispatch(SetSpecialProduct(specialProducts));
                let featureProducts = res.data['data'].filter((currentValue)=>currentValue.tags === "Featured");
                store.dispatch(SetFeatureProduct(featureProducts));
            } else {
                store.dispatch(SetProductList([]))
                store.dispatch(SetPopularProduct([]));
                store.dispatch(SetSpecialProduct([]));
                store.dispatch(SetFeatureProduct([]));
            }
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        //store.dispatch(HideLoader())
    }
}


export async function FilterProductsRequest(searchValue,letter,price,date,Category,fromPrice,toPrice,empty) {

    try {
        store.dispatch(ShowLoader())
        store.dispatch(ShowLoading())
        let URL = BaseURL+"/FilterProducts/"+searchValue+"/"+letter+"/"+price+"/"+date+"/"+Category+"/"+fromPrice+"/"+toPrice+"/"+empty;
        const res = await axios.get(URL)
        store.dispatch(HideLoader())
        store.dispatch(HideLoading())

        if (res.status === 200 && res.data['status'] === "success") {
            if (res.data['data'].length > 0) {
                store.dispatch(SetFilterProducts(res.data['data']))
                return true;
            }
            else {
                store.dispatch(SetFilterProducts([]))
                return true;
            }
        } else {
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        store.dispatch(HideLoading())
    }
}





export async function GetProductRequest(ObjectID) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/GetAProduct/"+ObjectID;
        const res = await axios.get(URL)
        store.dispatch(HideLoader())
        if (res.status === 200 && res.data['status'] === "success") {
            let product = res.data['data'][0];
            store.dispatch(SetProductName(product['ProductName']));
            store.dispatch(SetProductPrice(product['price']));
            store.dispatch(SetProductQuantity(product['quantity']));
            store.dispatch(SetProductDesc(product['description']));
            store.dispatch(SetCategoryName(product['Category'][0]['CategoryName']));
            store.dispatch(SetBrandName(product['Brand'][0]['BrandName']));
            store.dispatch(SetProductColor(product['Colors']));
            store.dispatch(SetProductTag(product['tags']));
            store.dispatch(SetProductImage(product['images']));
            store.dispatch(SetSelectedImage(product['images'][0]['image_url']));
            store.dispatch(SetTotalRating(product['totalRating']));
            store.dispatch(SetRatings(product['ratings']));
            store.dispatch(SetProductID(product['_id']));
            return true;
        } else {
            debugger;
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        debugger;
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
        ErrorToast("Product")
        return false;
    }
}











//Add Wishlist
export async function AddWishlistRequest(ProductID) {

    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/AddToWishList";
        let PostBody = {
            productID: ProductID
        }
        const res = await axios.post(URL,PostBody,AxiosHeader)
        store.dispatch(HideLoader())
        if (res.status === 200) {
              if (res.data['status'] === "success") {
                  SuccessToast(res.data['result']);
                  return true;
              }
              else{
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
        //alert(JSON.stringify(e));
        if(e['message'] === "Request failed with status code 401"){
            localStorage.clear();
            setTimeout(()=>{
                window.location.href="/";
            },1000)
        }
        return false;
    }
}




export async function GetWishlistRequest() {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/GetWishlist";
        const res = await axios.get(URL,AxiosHeader)
        store.dispatch(HideLoader())
        if (res.status === 200 && res.data['status'] === "success") {
            //let product = res.data['data'][0];
            store.dispatch(SetWishlist(res.data['data'][0]['WishlistDetails']));
            //console.log(res.data['data'][0]['WishlistDetails']);
            return true;//
        } else {
            debugger;
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        debugger;
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
        //alert(JSON.stringify(e));

        //Token Expire
        if(e['message'] === "Request failed with status code 401"){
            localStorage.clear();
            setTimeout(()=>{
                window.location.href="/";
            },1000)
        }
        return  false
    }
}




//Add Wishlist
export async function RatingRequest(Star, ProductID, Comment) {

    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/Rating";
        let PostBody = {
            star:Star,
            productID: ProductID,
            comment: Comment
        }
        const res = await axios.post(URL,PostBody,AxiosHeader)
        store.dispatch(HideLoader())
        if (res.status === 200) {
            if (res.data['status'] === "success") {
                SuccessToast("Rating Added Successfully");
                return true;
            }
            else{
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
                window.location.href="/";//Give Login Page URL
            },1000)
        }
        return false;
    }
}







//Delete BlogList
export async function RemoveWishListRequest(ProductID) {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/RemoveWishList";
        let PostBody = {productID: ProductID}
        const result = await axios.post(URL,PostBody,AxiosHeader)
        store.dispatch(HideLoader())
        if (result.status === 200 && result.data['status'] === "success") {
            store.dispatch(SetWishlist(result.data['data'][0]['WishlistDetails']));
            SuccessToast("Remove from Wishlist Successfully");
            return true
        }
        else {
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        if(e['message'] === "Request failed with status code 401"){
            localStorage.clear();
            setTimeout(()=>{
                window.location.href="/";
            },1000)
        }
        return false
    }
}








