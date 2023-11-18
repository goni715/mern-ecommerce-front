import React, {Fragment} from 'react';
import Watch from "../../assets/images/watch.jpg";
import CrossPic from "../../assets/images/cross.svg";
import Container from "../Container/Container";

const CompareProduct = () => {
    return (
        <>
            <Container class1="compare-product-wrapper py-5 storeBackground">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src={CrossPic} alt="cross" className="position-absolute cross img-fluid"/>
                                <div className="product-card-image">
                                    <img src={Watch} alt="watch"/>
                                </div>
                                <div className="compare-product-details">
                                  <h5 className="title">
                                      Honor T1 7.0 1GB RAM 7 Inch With Wi-Fi+3G Tablet
                                  </h5>
                                    <h6 className="price mb-3 mt-3">$ 100</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color:</h5>
                                            {/*<Color colors=""/>*/}
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src={CrossPic} alt="cross" className="position-absolute cross img-fluid"/>
                                <div className="product-card-image">
                                    <img src={Watch} alt="watch"/>
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">
                                       Beoplay A1 Portable Bluetooth Speaker With Microphone
                                    </h5>
                                    <h6 className="price mb-3 mt-3">$ 500</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color:</h5>
                                            {/*<Color/>*/}
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src={CrossPic} alt="cross" className="position-absolute cross img-fluid"/>
                                <div className="product-card-image">
                                    <img src={Watch} alt="watch"/>
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">
                                        Milanese Loop Watch Band For 42mm/44mm Apple Watch
                                    </h5>
                                    <h6 className="price mb-3 mt-3">$ 150</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color:</h5>
                                            {/*} <Color/>*/}
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src={CrossPic} alt="cross" className="position-absolute cross img-fluid"/>
                                <div className="product-card-image">
                                    <img src={Watch} alt="watch"/>
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">
                                        Sony EXTRA BASS Portable Splash-Proof Wireless Speaker
                                    </h5>
                                    <h6 className="price mb-3 mt-3">$ 200.00</h6>
                                    <div>
                                        <div className="product-detail">
                                            <h5>Brand:</h5>
                                            <p>Havels</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                        <div className="product-detail">
                                            <h5>Color:</h5>
                                            {/* <Color/>*/}
                                        </div>
                                        <div className="product-detail">
                                            <h5>Size:</h5>
                                            <div className="d-flex gap-10">
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    );
};

export default CompareProduct;