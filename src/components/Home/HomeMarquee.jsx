import React, {Fragment} from 'react';
import Marquee from "react-fast-marquee";
import BrandPic01 from "../../assets/images/brand-01.png";
import BrandPic02 from "../../assets/images/brand-02.png";
import BrandPic03 from "../../assets/images/brand-03.png";
import BrandPic04 from "../../assets/images/brand-04.png";
import BrandPic05 from "../../assets/images/brand-05.png";
import BrandPic06 from "../../assets/images/brand-06.png";
import BrandPic07 from "../../assets/images/brand-07.png";
import Container from "../Container/Container";

const HomeMarquee = () => {
    return (
        <Fragment>

            <Container class1="marquee-wrapper py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper">
                            <Marquee>
                                <div className="mx-4 w-25">
                                    <img src={BrandPic01} alt="marquee"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={BrandPic02} alt="marquee"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={BrandPic03} alt="marquee"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={BrandPic04} alt="marquee"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={BrandPic05} alt="marquee"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={BrandPic06} alt="marquee"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={BrandPic07} alt="marquee"/>
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Container>

        </Fragment>
    );
};

export default HomeMarquee;