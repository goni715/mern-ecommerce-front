import React, {Fragment, useRef, useState} from 'react';
import ReactCodeInput from "react-code-input";
import {useNavigate} from "react-router-dom";
import {ErrorToast} from "../../helper/ValidationHelper";
import {
    getFirstName,
    getLastName,
    getMobile,
    getPassword,
    getPhoto,
    getRegEmail,
} from "../../helper/SessionHelper";
import {SignUpVerifyOTPRequest} from "../../ApiServices/UserApiRequest";
import Container from "../Container/Container";


const SignUpVerifyOTP = () => {

    let ProcessingBtnRef = useRef()

    const navigate = useNavigate();

    let [OTP,SetOTP] = useState("");

    let  defaultInputStyle= {
        fontFamily: "monospace",
        MozAppearance: "textfield",
        margin: "4px",
        paddingLeft: "8px",
        width: "45px",
        borderRadius: '3px',
        height: "45px",
        fontSize: "32px",
        border: '1px solid lightskyblue',
        boxSizing: "border-box",
        color: "black",
        backgroundColor: "white",
        borderColor: "lightgrey"
    }


    const SubmitOTP = async () => {

        if(OTP.length===6){
             let Result = await SignUpVerifyOTPRequest(getRegEmail(),getFirstName(),getLastName(),getMobile(),getPassword(),getPhoto(), OTP,ProcessingBtnRef);
             if(Result===true){
                 localStorage.clear();
                 navigate('/Login');
             }
        }
        else{
             ErrorToast("Enter 6 Digit Code");
        }

    }


    return (
        <Fragment>

            <Container class1="login-wrapper storeBackground py-5">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90 p-4">
                            <div className="card-body">
                                <h4>OTP VERIFICATION </h4>
                                <p>We have sent a verification code to your email address <span className="text-bold">{getRegEmail()}</span> </p>
                                <ReactCodeInput onChange={(value)=>SetOTP(value)} inputStyle={defaultInputStyle} fields={6} />
                                <br/>  <br/>
                                <button onClick={SubmitOTP} className="button border-0" type="submit">Verify</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>


        </Fragment>
    );
};

export default SignUpVerifyOTP;