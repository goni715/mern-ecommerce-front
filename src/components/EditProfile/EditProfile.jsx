import React, {useEffect, useRef} from 'react';
import {ErrorToast, IsEmail, IsEmpty, IsMobile} from "../../helper/ValidationHelper";
import {useSelector} from "react-redux";
import {GetUserRequest, ProfileUpdateRequest} from "../../ApiServices/UserApiRequest";
import {
    selectProfileEmail,
    selectProfileFirstName,
    selectProfileLastName,
    selectProfileMobile
} from "../../redux/state-slice/profileSlice";
import {useNavigate} from "react-router-dom";

const EditProfile = () => {

    let emailRef, firstNameRef, lastNameRef, mobileRef, userImgPreviewRef,userImgRef,ProcessingBtnRef = useRef();
    const navigate = useNavigate();


    useEffect(()=>{

        (async () => {
            await GetUserRequest();
        })();
    },[])


    const FirstName = useSelector(selectProfileFirstName);
    const LastName = useSelector(selectProfileLastName);
    const Email = useSelector(selectProfileEmail);
    const Mobile = useSelector(selectProfileMobile);





    const UpdateMyProfile = async () => {

        let email = emailRef.value;
        let firstName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let mobile = mobileRef.value;
        //let photo = userImgPreviewRef.src;

        if(IsEmail(email)){
            ErrorToast("Valid Email Adress Required!");
        }
        else if(IsEmpty(firstName)){
            ErrorToast("First Name Required!");
        }
        else if(IsEmpty(lastName)){
            ErrorToast("Last Name Required!");
        }
        else if(IsEmpty(mobile)){
            ErrorToast("Mobile Number Required!");
        }
        else if(IsMobile(mobile)){
            ErrorToast("Valid Mobile Number Required!");
        }
        else{

            let Result = await ProfileUpdateRequest(email,firstName,lastName,mobile);
            if(Result===true){
                navigate('/my-profile');
            }
        }

    }

    return (
        <>
            <div className="card-wrapper storeBackground py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="container-fluid">
                                    {/* <div className="text-center">
                                        <img ref={(input)=>userImgPreviewRef=input} className="icon-nav-img-lg" src={ProfileDataArray['photo']} alt=""/>
                                    </div>
                                    <hr/> */}
                                    <div className="row m-0 p-0">
                                        {/* <div className="col-md-4 p-2">
                                            <label>Profile Picture</label>
                                            <input onChange={PreviewImage} ref={(input)=>userImgRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="file"/>
                                        </div>*/}
                                        <div className="col-md-4 p-2">
                                            <label>Email Address</label>
                                            <input key={Date.now()} readOnly={true} defaultValue={Email} ref={(input)=>emailRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>First Name</label>
                                            <input key={Date.now()} defaultValue={FirstName} ref={(input)=>firstNameRef=input} placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>Last Name</label>
                                            <input key={Date.now()} defaultValue={LastName} ref={(input)=>lastNameRef=input} placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>Mobile</label>
                                            <input key={Date.now()} defaultValue={Mobile} ref={(input)=>mobileRef=input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4 p-2">
                                        <button onClick={UpdateMyProfile} ref={(button)=>ProcessingBtnRef=button}  className="btn w-100 float-end btnBackground animated fadeInUp">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;