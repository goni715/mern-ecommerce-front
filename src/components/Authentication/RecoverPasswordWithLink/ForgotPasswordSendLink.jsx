import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import Container from "../../Container/Container";
import {ErrorToast, IsEmail, IsEmpty} from "../../../helper/ValidationHelper";
import {RecoverPasswordVerifyEmailRequest} from "../../../ApiServices/UserApiRequest";

const ForgotPassword = () => {


    let emailRef = useRef();

    const VerifyEmail= async () => {

        let email = emailRef.value;

        if(IsEmpty(email)){
            ErrorToast("Email Address Required!");
        }
        else if(IsEmail(email)){
            ErrorToast("Valid Email Address Required!");
        }
        else{
             await RecoverPasswordVerifyEmailRequest(email);
        }
    }




    return (
        <>
            <Container class1="login-wrapper storeBackground py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Verify Email</h3>
                                <p className="text-center mt-2 mb-3">We have sent a verification code to your email address</p>
                                <div className="d-flex flex-column gap-15">
                                    <div>
                                        <input ref={(input)=>emailRef=input} type="email" className="form-control" placeholder="Email Address"/>
                                    </div>
                                    <div>
                                        <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                                            <button onClick={VerifyEmail} className="button border-0" type="submit">Submit</button>
                                            <Link to="/login">Cancel</Link>
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

export default ForgotPassword;