import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import Container from "../Container/Container";
import {
    ErrorToast,
    IsEmail,
    IsEmpty,
    IsMobile,
    IsNonWhiteSpace,
    IsValidLength,
} from "../../helper/ValidationHelper";
import {setFirstName, setLastName, setMobile, setPassword, setRegEmail} from "../../helper/SessionHelper";
import {SignUpEmailVerifyRequest} from "../../ApiServices/UserApiRequest";

const Signup = () => {

    let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef=useRef();
    const navigate = useNavigate();


    const onRegistration = async () => {

        let email = emailRef.value;
        let firstName = firstNameRef.value.trim();
        let lastName = lastNameRef.value.trim();
        let mobile = mobileRef.value;
        let password = passwordRef.value;


        if(IsEmpty(firstName)){
            ErrorToast("First Name Required");
        }
        else if(IsEmpty(lastName)){
            ErrorToast("Last Name Required");
        }
        else if(IsEmpty(email)) {
            ErrorToast("Email is Required");
        }
        else if(IsEmail(email)) {
            ErrorToast("Valid Email Address Required");
        }
        else if(IsEmpty(mobile)){
            ErrorToast("Mobile Number Required");
        }
        else if(IsMobile(mobile)){
            ErrorToast("Valid Mobile Number Required");
        }
        else if(IsEmpty(password)){
            ErrorToast("Password Required");
        }
        else if(password.length<5){
            ErrorToast("Your password must be at least 5 characters");
        }/*
        else if(password.search(/[a-z]/i) < 0){
            ErrorToast("Your password must contain at least one letter.");
        }
        else if(password.search(/[0-9]/) < 0){
            ErrorToast("Your password must contain at least one number.");
        }*/
        else if(IsValidLength(password)){
            ErrorToast("Password must be 5-16 Characters Long!");
        }
        else if(IsNonWhiteSpace(password)){
            ErrorToast("Password must not contain Whitespaces!")
        }/*
        else if(IsSpecialCharacter(password)){
            ErrorToast("password should contain atleast special character");
        }*/
        else{

            let Result = await SignUpEmailVerifyRequest(email);
            if(Result === true){
                setRegEmail(email);
                setFirstName(firstName);
                setLastName(lastName);
                setMobile(mobile);
                setPassword(password);

                navigate("/signup-verify-otp");
            }
        }
    }




    return (
        <>
            <Container class1="login-wrapper storeBackground py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Sign Up</h3>
                                    <div>
                                        <input ref={(input)=>firstNameRef=input}  type="text" className="form-control" placeholder="First Name"/>
                                    </div>
                                    <div className="mt-2">
                                       <input ref={(input)=>lastNameRef=input} type="text" className="form-control" placeholder="Last Name"/>
                                    </div>
                                    <div className="mt-2">
                                        <input ref={(input)=>emailRef=input} type="email" className="form-control" placeholder="Email Address"/>
                                    </div>
                                    <div className="mt-2">
                                        <input ref={(input)=>mobileRef=input} type="tel" className="form-control" placeholder="Mobile Number"/>
                                    </div>
                                    <div className="mt-2">
                                        <input  ref={(input)=>passwordRef=input} type="password" className="form-control" placeholder="Type Your Password"/>
                                    </div>
                                    <div>
                                        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                            <button onClick={onRegistration} className="button border-0">Sign Up</button>
                                        </div>
                                    </div>

                            </div>
                        </div>
                    </div>
            </Container>
        </>
    );
};

export default Signup;