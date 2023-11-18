import React, {useRef} from 'react';
import Container from "../../Container/Container";
import {useNavigate} from "react-router-dom";
import {ErrorToast, IsEmpty, IsNonWhiteSpace, IsValidLength} from "../../../helper/ValidationHelper";
import {CreateNewPasswordRequest} from "../../../ApiServices/UserApiRequest";

const ResetPassword = ({email, token}) => {


    let newPasswordRef,confirmPasswordRef = useRef();
    const navigate = useNavigate();




    const NewPassword = async () => {

        let newPassword = newPasswordRef.value;
        let confirmPassword = confirmPasswordRef.value;

        if(IsEmpty(newPassword)){
            ErrorToast("Password Required!");
        }
        else if(IsEmpty(confirmPassword)){
            ErrorToast("Confirm Password Required!");
        }
        else if(newPassword.length<5){
            ErrorToast("Password must be at least 5 characters");
        }
        else if(confirmPassword.length<5){
            ErrorToast("Confirm password must be at least 5 characters");
        }
        else if(newPassword !== confirmPassword){
            ErrorToast("Password & Confirm Password Should be Same");
        }
        else if(IsValidLength(newPassword)){
            ErrorToast("Password must be 5-16 Characters Long!");
        }
        else if(IsNonWhiteSpace(newPassword)){
            ErrorToast("Password must not contain Whitespaces!")
        }
        else{
           let Result = await CreateNewPasswordRequest(token, email, newPassword);
            if(Result===true){
               localStorage.clear();
               navigate('/Login');
           }
        }

    }




    return (
        <>
            <Container class1="login-wrapper storeBackground py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Reset Password</h3>
                                <div>
                                    <div>
                                        <input ref={(input)=>newPasswordRef=input} type="password" className="form-control" placeholder="New Password"/>
                                    </div>
                                    <div className="mt-1">
                                        <input ref={(input)=>confirmPasswordRef=input} type="password" className="form-control" placeholder="Confirm New Password"/>
                                    </div>
                                    <div>
                                        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                            <button onClick={NewPassword} className="button border-0">OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    );
};

export default ResetPassword;