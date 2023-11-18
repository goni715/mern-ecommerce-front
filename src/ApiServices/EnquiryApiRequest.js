
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settingsSlice";
import {BaseURL} from "../helper/config";
import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/ValidationHelper";
import {getToken} from "../helper/SessionHelper";
const AxiosHeader={headers:{"token":getToken()}}







//Create Enquiry
export async function CreateEnquiryRequest(Name,Email,Mobile,Comment){

    try{
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/CreateEnquiry";
        let PostBody={
            name: Name,
            email: Email,
            mobile: Mobile,
            comment: Comment
        }
        let res =await axios.post(URL,PostBody, AxiosHeader)
        store.dispatch(HideLoader())
        if(res.status === 200) {
            if(res.data['status'] === "success"){
                SuccessToast("Contact From Submitted Successfully");
                return true;
            }
            else{
                ErrorToast("Send Fail");
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






