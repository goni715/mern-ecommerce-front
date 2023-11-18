import React, {Fragment} from 'react';
import './Home.css';
import Famous1 from "../../assets/images/famous1.webp";
import Famous2 from "../../assets/images/famous2.webp";
import Famous3 from "../../assets/images/famous3.webp";
import Famous4 from "../../assets/images/famous4.webp";
import Container from "../Container/Container";


const FamousCard = () => {
    return (
        <>
            <Container class1="famous-wrapper py-5 home-service">
                <div className="row">
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src={Famous1} className="img-fluid" alt="famous"/>
                            <div className="famous-content position-absolute">
                                <h5 className="text-white">Big Screen</h5>
                                <h6 className="text-white">Smart Watch Series 7</h6>
                                <p className="text-white">From $399 $16.62/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src={Famous3} className="img-fluid ggg" alt="famous"/>
                            <div className="famous-content position-absolute">
                                <h5 className="text-dark">STUDIO DISPLAY</h5>
                                <h6 className="text-dark">600 nits of brightness</h6>
                                <p className="text-dark">27-inch 5K Retina Display</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src={Famous2} className="img-fluid" alt="famous"/>
                            <div className="famous-content position-absolute">
                                <h5 className="text-dark">SMART REMOTE</h5>
                                <h6 className="text-dark">Smart Remote 13 Pro.</h6>
                                <p className="text-dark">From $399 $16.62/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <img src={Famous4} className="img-fluid" alt="famous"/>
                            <div className="famous-content position-absolute">
                                <h5 className="text-dark">SMART LAPTOP</h5>
                                <h6 className="text-dark">HP Laptop Series</h6>
                                <p className="text-dark">From $399 $16.62/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default FamousCard;