import React, {Fragment} from 'react';
import './Home.css';
import CameraPic from "../../assets/images/camera.jpg";
import HeadphonePic from "../../assets/images/headphone.jpg";
import TVPic from "../../assets/images/tv.jpg";

import Container from "../Container/Container";


const HomeCategory = () => {
    return (
        <Fragment>
            <Container class1="home-service py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                            <div className="d-flex align-items-center">
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src={CameraPic} alt="categories"/>
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Smart TV</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src={TVPic} alt="categories"/>
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Smart Watches</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src={HeadphonePic} alt="categories"/>
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Camera</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src={CameraPic} alt="categories"/>
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Music & Gaming</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src={CameraPic} alt="categories"/>
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Smart TV</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src={TVPic} alt="categories"/>
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Headphones</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src={HeadphonePic} alt="categories"/>
                            </div>
                            <div className="d-flex gap align-items-center">
                                <div>
                                    <h6>Camera</h6>
                                    <p>10 Items</p>
                                </div>
                                <img src={CameraPic} alt="categories"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
};

export default HomeCategory;