import React, {useRef} from 'react';
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import {BiInfoCircle, BiPhoneCall} from "react-icons/bi";
import Container from "../Container/Container";
import {ErrorToast, IsEmail, IsEmpty, IsMobile} from "../../helper/ValidationHelper";
import {CreateEnquiryRequest} from "../../ApiServices/EnquiryApiRequest";

const Contact = () => {

    let nameRef, emailRef, mobileRef, commentRef = useRef();


    const Submit=async () => {
        debugger;
        let name = nameRef.value.trim();
        let email = emailRef.value;
        let mobile = mobileRef.value;
        let comment = commentRef.value;
        debugger;

        if(IsEmpty(name)) {
            ErrorToast("Provide a Full Name");
        }
        else if(IsEmpty(email)) {
            ErrorToast("Email is Required");
        }
        else if(IsEmail(email)) {
            ErrorToast("Invalid Email Address")
        }
        else if(IsEmpty(mobile)){
            ErrorToast("Mobile Number Required");
        }
        else if(IsMobile(mobile)){
            ErrorToast("Valid Mobile Number Required");
        }
        else if(IsEmpty(comment)){
            ErrorToast("Write a Comment");
        }
        else{
            let result= await CreateEnquiryRequest(name, email, mobile, comment);
            if(result){
                nameRef.value="";
                emailRef.value="";
                mobileRef.value="";
                commentRef.value="";
            }
        }
    }

    return (
        <>
            <Container class1="contact-wrapper storeBackground py-5">
                <div className="row">
                    <div className="col-12">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114947.26000117218!2d88.85565297185082!3d25.800212924969095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e35049a0597e5d%3A0xdcf3bc5b3efc2369!2sSaidpur%20Upazila!5e0!3m2!1sen!2sbd!4v1679728074006!5m2!1sen!2sbd"
                            width="600"
                            height="450"
                            className="border-0 w-100"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="contact-inner-wrapper d-flex justify-content-between">
                            <div>
                                <h3 className="contact-title mb-4">Contact</h3>
                                <div className="form d-flex flex-column gap-15">
                                    <div>
                                        <input ref={(input)=>nameRef=input} type="text" className="form-control" placeholder="Full Name"/>
                                    </div>
                                    <div>
                                        <input ref={(input)=>emailRef=input} type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div>
                                        <input ref={(input)=>mobileRef=input} type="tel" className="form-control" placeholder="Mobile Number"/>
                                    </div>
                                    <div>
                                        <textarea ref={(input)=>commentRef=input} className="form-control w-100" cols="30" rows="4" placeholder="Comments"></textarea>
                                    </div>
                                    <div>
                                        <button onClick={Submit} className="button border-0">Submit</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="contact-title mb-4">Get in touch with Us</h3>
                                <div>
                                    <ul className="ps-0">
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <AiOutlineHome className="fs-5"/>
                                            <address>
                                                Hno:277, Dhaka, Bangladesh
                                            </address>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <BiPhoneCall className="fs-5"/>
                                            <a href="tel:+91 8264954234"> +91 8264954234</a>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <AiOutlineMail className="fs-5"/>
                                            <a href="mailto:goniosmani160@gmail.com"> goniosmani160@gmail.com</a>
                                        </li>
                                        <li className="mb-3 d-flex gap-15 align-items-center">
                                            <BiInfoCircle className="fs-5"/>
                                            <p className="mb-0">Monday - Friday 10 AM - 8 PM</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contact;