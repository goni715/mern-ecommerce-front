import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import './Home.css';
import MainBannerPic from '../../assets/images/main-banner.jpg';
import CatBannerPic01 from '../../assets/images/catbanner-01.jpg';
import CatBannerPic02 from '../../assets/images/catbanner-02.jpg';
import CatBannerPic03 from '../../assets/images/catbanner-03.jpg';
import CatBannerPic04 from '../../assets/images/catbanner-04.jpg';
import Container from "../Container/Container";

const HomeBanner = () => {
    return (
        <Fragment>

            <Container class1="home-wrapper-1 py-5">
                <div className="row">
                    <div className="col-6">
                        <div className="main-banner position-relative">
                            <img
                                src={MainBannerPic}
                                className="img-fluid rounded-3"
                                alt="main banner"
                            />
                            <div className="main-banner-content position-absolute">
                                <h4>SUPERCHARGED FOR PROS.</h4>
                                <h5> iPad S13+ Pro.</h5>
                                <p>From $999.00 or $41.62/mo.</p>
                                <Link className="button" to=""> BY NOW</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                            <div className="small-banner position-relative">
                                <img
                                    src={CatBannerPic01}
                                    className="img-fluid rounded-3"
                                    alt="main banner"
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>SUPERCHARGED FOR PROS.</h4>
                                    <h5> iPad S13+ Pro.</h5>
                                    <p>From $999.00 <br/> or $41.62/mo.</p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img
                                    src={CatBannerPic02}
                                    className="img-fluid rounded-3"
                                    alt="main banner"
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>NEW ARRIVAL</h4>
                                    <h5> But IPad Air</h5>
                                    <p>From $999.00 <br/> or $41.62/mo.</p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img
                                    src={CatBannerPic03}
                                    className="img-fluid rounded-3"
                                    alt="main banner"
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>SUPERCHARGED FOR PROS.</h4>
                                    <h5> iPad S13+ Pro.</h5>
                                    <p>From $999.00 <br/> or $41.62/mo.</p>
                                </div>
                            </div>
                            <div className="small-banner position-relative">
                                <img
                                    src={CatBannerPic04}
                                    className="img-fluid rounded-3"
                                    alt="main banner"
                                />
                                <div className="small-banner-content position-absolute">
                                    <h4>SUPERCHARGED FOR PROS.</h4>
                                    <h5> iPad S13+ Pro.</h5>
                                    <p>From $999.00 <br/> or $41.62/mo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>


        </Fragment>
    );
};

export default HomeBanner;