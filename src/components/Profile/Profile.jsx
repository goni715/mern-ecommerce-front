import React from 'react';
import {NavLink} from "react-router-dom";
import {AiOutlineEdit} from "react-icons/ai";
import {getUserDetails} from "../../helper/SessionHelper";

const Profile = () => {
    return (
        <>
            <div className="card-wrapper storeBackground py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="container-fluid text-center">
                                    {/*<img className="icon-nav-img-lg" src={ProfileDataArray['photo']} alt=""/>*/}
                                    {/*<hr/>*/}
                                    <div className="row m-0 p-0">
                                        <div className="col-md-12 p-2">
                                            <h6 className="textAlign"> <span className="profileTxtSize1">Name</span> : {getUserDetails()?.firstName} {getUserDetails()?.lastName}</h6>
                                        </div>
                                        <div className="col-md-12 p-2">
                                            <h6 className="textAlign"> <span className="profileTxtSize1"> Email</span> : {getUserDetails()?.email} </h6>
                                        </div>
                                        <div className="col-md-12 p-2">
                                            <h6 className="textAlign"> <span className="profileTxtSize1"> Mobile</span> : {getUserDetails()?.mobile} </h6>
                                        </div>
                                        <div className="row col-md-12 p-0 mt-3">
                                            <div className="col-md-6 p-0 mt-3">
                                                <NavLink to="/edit-profile"  end>
                                                    <button className="btn btn-secondary btnCapitalize"><AiOutlineEdit className="side-bar-item-icon text-white"/>Edit Profile</button>
                                                </NavLink>
                                            </div>
                                            <div className="col-md-6 p-0 mt-3">
                                                <NavLink to="/ChangePassword"  end>
                                                    <button className="btn btn-primary btnCapitalize">  <AiOutlineEdit className="side-bar-item-icon text-white"/>Change Password</button>
                                                </NavLink>

                                            </div>
                                        </div>
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

export default Profile;