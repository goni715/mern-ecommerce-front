import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settingsSlice";
import {BaseURL} from "../helper/config";
import {ErrorToast} from "../helper/ValidationHelper";
import {getToken} from "../helper/SessionHelper";
import axios from "axios";
import {
    SetMyOrderList,
} from "../redux/state-slice/orderSlice";
const AxiosHeader={headers:{"token":getToken()}}







//Get My Orders
export async function GetMyOrdersRequest() {
    try {
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/GetOrderByUser";
        const res = await axios.get(URL, AxiosHeader)
        store.dispatch(HideLoader())
        if (res.status === 200 && res.data['status'] === "success") {
            if (res.data['data'].length > 0) {
                store.dispatch(SetMyOrderList(res.data['data']))
            } else {
                store.dispatch(SetMyOrderList([]))
            }
        } else {
            debugger;
            ErrorToast("Request Fail ! Try Again")
            return false;
        }
    }
    catch (e) {
        debugger;
        ErrorToast("Something Went Wrong")
        store.dispatch(HideLoader())
        return  false
    }
}





//Create Order

export async function CreateOrderWithPaymentRequest(Country, Address, City, CartList, totalAmount){

   let OrderItems = [];
   await CartList.forEach((item,i)=>{
        let pruduct = {
            ProductID: item.ProductID,
            color: item.ColorID,
            quantity: item.quantity
        }
        OrderItems.push(pruduct);
    })


    try{
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/CreateOrderWithPayment";
        let PostBody={
            shippingInfo: {
                country: Country,
                address: Address,
                city: City,
            },
            orderItems: OrderItems,
            totalPrice:totalAmount,
        }

        let res =await axios.post(URL,PostBody, AxiosHeader)
        store.dispatch(HideLoader())

        if(res.status === 200) {
            window.location.href = res.data['url'];
            //SuccessToast("Data is Gone");
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





