import axios from "axios";

import {BaseURL} from "../helper/config";
import {ErrorToast, SuccessToast} from "../helper/ValidationHelper";
import store from "../redux/store/store";
import {getToken, setToken, setUserDetails} from "../helper/SessionHelper";
import {HideLoader, ShowLoader} from "../redux/state-slice/settingsSlice";
import {
    SetProfileEmail,
    SetProfileFirstName,
    SetProfileLastName,
    SetProfileMobile
} from "../redux/state-slice/profileSlice";
const AxiosHeader={headers:{"token":getToken()}}







//SignUpEmailVerify--SendOTP--Step-01
export async function SignUpEmailVerifyRequest(email){

    try {
        store.dispatch(ShowLoader());
        let URL = BaseURL + "/SignUpEmailVerify/" + email;
        let res = await axios.get(URL);
        store.dispatch(HideLoader());

        if(res.status === 200){
            if(res.data['status'] === "fail"){
                if(res.data['data'] === "EmailAlreadyExist"){
                    ErrorToast("Email Already Exist");
                    return false;
                }
                else{
                    ErrorToast("Something Went Wrong");
                    return false;
                }
            }
            else{
                SuccessToast("A 6 Digit verification code has been sent to your email address. ");
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong");
            return false;
        }
    }
    catch(error) {
        store.dispatch(HideLoader());
        ErrorToast("Something Went Wrong");
        return false;
    }


}







//SignUpVerifyOTP--Step-02-DataInsert
export async function SignUpVerifyOTPRequest(Email,FirstName,LastName,Mobile,Password,Photo,OTP,){

    try{
        store.dispatch(ShowLoader())
        let URL = BaseURL+"/SignUpVerifyOTP/"+Email+"/"+OTP;
        let PostBody={
            email:Email,
            firstName:FirstName,
            lastName:LastName,
            mobile:Mobile,
            password:Password,
            photo:Photo
        }
        let res =await axios.post(URL,PostBody)
        store.dispatch(HideLoader())
        if(res.status === 200) {
            if(res.data['status'] === "fail"){
                if(res.data['data'] === "InvalidOTPCode"){
                    ErrorToast("Invalid Verification Code");
                    return false;
                }
                else{
                    ErrorToast("Something Went Wrong");
                    return false;
                }
            }
            else{
                SuccessToast("Sign Up Success ");
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong");
            return false;
        }
    }
    catch(error){
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong");
        return false;
    }
}







export async function LoginRequest(email,password){

    try {
        //debugger;
        store.dispatch(ShowLoader())
        //debugger;
        let URL=BaseURL+"/Login";
        //debugger;
        let PostBody={"email":email,"password":password}
        //debugger;
        let res =await axios.post(URL,PostBody);
        store.dispatch(HideLoader())
        if(res.status===200){
            if(res.data['status'] === "success"){
                let MyToken = res.data['token'];
                let user = res.data['data']; //This is Object
                setToken(MyToken);
                let userDetails = {
                    email: user['email'],
                    firstName: user['firstName'],
                    lastName: user['lastName'],
                    mobile:user['mobile']
                }

                setUserDetails(userDetails);
                SuccessToast("Login Success");
                return true;
            }
            else if(res.data['status'] === "fail"){
                ErrorToast(res.data['data']);
            }
            else{
                ErrorToast("Request Fail, Try Again!");
                return false;
            }
        }
        else{
            ErrorToast("Something Went Wrong");
            return false;
        }
    }
    catch (e) {

        ErrorToast("Something Went Wrong")
        return false;
    }
}




export async function GetUserRequest(){
    try {
        store.dispatch(ShowLoader())
        let URL=BaseURL+"/GetUser";
        let res=await axios.get(URL,AxiosHeader);
        store.dispatch(HideLoader())
        if(res.status===200){
            if(res.data['status'] === "success"){
                store.dispatch(SetProfileEmail(res.data['data'][0]['email']));
                store.dispatch(SetProfileFirstName(res.data['data'][0]['firstName']));
                store.dispatch(SetProfileLastName(res.data['data'][0]['lastName']));
                store.dispatch(SetProfileMobile(res.data['data'][0]['mobile']));
            }
            else{
                ErrorToast("Something Went Wrong")
            }
        }
        else{
            ErrorToast("Something Went Wrong")
        }
    }
    catch (e){
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
        if(e['message'] === "Request failed with status code 401"){
            localStorage.clear();
            setTimeout(()=>{
                window.location.href="/login";
            },1000)
        }
    }
}



export async function ProfileUpdateRequest(Email,FirstName,LastName,Mobile){
    try {
        store.dispatch(ShowLoader())
        store.dispatch(ShowLoader())
        let URL=BaseURL+"/UpdateUser";
        let PostBody={email:Email,firstName:FirstName,lastName:LastName,mobile:Mobile};
        let UserDetails={email:Email,firstName:FirstName,lastName:LastName,mobile:Mobile};
        let res=await axios.post(URL,PostBody,AxiosHeader);
        store.dispatch(HideLoader())

        if(res.status===200){
            if(res.data['status'] === "success"){
                SuccessToast("Profile Update Success")
                setUserDetails(UserDetails);
                return true;
            }
            else{
                ErrorToast("Something Went Wrong")
                return  false;
            }
        }
        else{
            ErrorToast("Something Went Wrong")
            return  false;
        }
    }
    catch (e){
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
        if(e['message'] === "Request failed with status code 401"){
            localStorage.clear();
            setTimeout(()=>{
                window.location.href="/login";
            },1000)
        }
        return false;
    }

}




// Recover Password Step 01 Send Link
export async function RecoverPasswordVerifyEmailRequest(email){

    try {
        store.dispatch(ShowLoader());
        let URL=BaseURL+"/RecoverPasswordVerifyEmail/"+email;
        let res = await axios.get(URL);
        store.dispatch(HideLoader());
        if(res.status===200){
            if(res.data['status'] === "fail"){
                if(res.data['data'] === "NoUserFound"){
                    ErrorToast("Couldn't find your Email Address!");
                    return false;
                }
                else{
                    ErrorToast("Something Went Wrong");
                    return false;
                }
            }
            else{
                //setEmail(email);
                SuccessToast("Please Check Your Email");
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong");
            return false;
        }
    }
    catch(error){
        store.dispatch(HideLoader());
        ErrorToast("Something Went Wrong");
        return false;
    }

}



// Recover Password Step 02 Create New Password
export async function CreateNewPasswordRequest(Token, Email, NewPassword){

    try {
        store.dispatch(ShowLoader())
        let URL=BaseURL+"/ResetPassword/"+Token;
        let PostBody={email:Email,newPassword:NewPassword};
        let res=await axios.post(URL,PostBody);
        store.dispatch(HideLoader())
        if(res.status===200){
            if(res.data['status']==="fail"){
                if(res.data['data']==="InvalidLink"){
                    ErrorToast("Link Expired! Try Again");
                    return false;
                }
                else{
                    ErrorToast("Something Went Wrong")
                    return false;
                }
            }
            else{
                SuccessToast("NEW PASSWORD CREATED");
                return true;
            }
        }
        else{
            ErrorToast("Something Went Wrong")
            return false;
        }
    }
    catch(error){
        store.dispatch(HideLoader())
        ErrorToast("Something Went Wrong")
        return false;
    }
}





