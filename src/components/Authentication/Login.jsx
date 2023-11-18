import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import Container from "../Container/Container";
import {ErrorToast, IsEmail, IsEmpty} from "../../helper/ValidationHelper";
import {LoginRequest} from "../../ApiServices/UserApiRequest";

const Login = () => {


    let passwordRef,emailRef=useRef();

    const SubmitLogin=async () => {

        let email = emailRef.value;
        let password = passwordRef.value.trim();

        if(IsEmpty(email)) {
            ErrorToast("Email is Required");
        }
        else if(IsEmail(email)) {
            ErrorToast("Invalid Email Address")
        }
        else if(IsEmpty(password)) {
            ErrorToast("Password Required")
        }
        else{
            let result= await LoginRequest(email, password);
            if(result){

                setTimeout(()=>{
                    window.location.href="/";
                },500)
            }
        }
    }






    return (
        <>
            <Container class1="login-wrapper storeBackground py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className="text-center mb-3">Login</h3>
                                    <div>
                                        <input ref={(input)=>emailRef=input} type="email" className="form-control" placeholder="Email Address"/>
                                    </div>
                                    <div className="mt-2 mb-1">
                                        <input ref={(input)=>passwordRef=input} type="password" className="form-control" placeholder="Type Your Password"/>
                                    </div>
                                    <div>
                                        <Link to="/forgot-password">Forgot Password?</Link>
                                        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                            <button onClick={SubmitLogin} className="button border-0">Login</button>
                                            <Link to="/signup" className="button signup">SignUp</Link>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    );
};

export default Login;