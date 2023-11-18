import React, {Fragment, useEffect} from 'react';
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";
import Container from "../Container/Container";
import {ProductListRequest} from "../../ApiServices/ProductApiRequest";
import {useSelector} from "react-redux";
import {selectSpecialProduct} from "../../redux/state-slice/productSlice";

const SpecialProduct = () => {



    useEffect(()=>{
        (async () => {
            await ProductListRequest();
        })();
    },[])


    let SpecialProducts = useSelector(selectSpecialProduct); //This is Array





    const ratingChanged = (newRating) => {
        //console.log(newRating);
        alert(newRating); //Catch New Value
    };




    return (
        <Fragment>

            <Container class1="special-wrapper py-5 home-service">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Special Products</h3>
                    </div>
                </div>
                <div className="row">
                    {
                        SpecialProducts?.map((item,i) => {
                                return (
                                    <>
                                        <div key={i.toString()} className="col-6 mb-3">
                                            <div className="special-product-card">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        <img src={item.images[0]['image_url']} className="img-fluid"
                                                             alt="special product"/>
                                                    </div>
                                                    <div className="special-product-content">
                                                        <h5 className="brand">{item['Brand'][0]['BrandName']}</h5>
                                                        <h6 className="title">
                                                            {item.ProductName}
                                                        </h6>
                                                        <ReactStars
                                                            count={5}
                                                            onChange={ratingChanged}
                                                            size={24}
                                                            activeColor="#ffd700"
                                                            value={item.totalRating.toString()}
                                                            isHalf={true}
                                                            edit={false}
                                                        />
                                                        <p className="price">
                                                            <span className="red-p">${item.price}</span> &nbsp;
                                                            <strike>$200</strike>
                                                        </p>
                                                        <div className="discount-till d-flex align-items-center gap-10">
                                                            <p className="mb-0">
                                                                <b>5 </b>days
                                                            </p>
                                                            <div className="d-flex gap-10 align-items-center">
                                                                <span
                                                                    className="badge rounded-circle p-2 bg-danger">05</span>:
                                                                <span
                                                                    className="badge rounded-circle p-2 bg-danger">25</span>:
                                                                <span
                                                                    className="badge rounded-circle p-2 bg-danger">48</span>
                                                            </div>
                                                        </div>
                                                        <div className="product-count my-3">
                                                            <p>Products: {item.quantity}</p>
                                                            <div
                                                                style={{width: item.quantity / (item.sold + item.quantity) * 100 + "%"}}
                                                                className="progress"
                                                                role="progressbar"
                                                                aria-label="Basic example"
                                                                aria-valuenow={item.quantity / (item.sold + item.quantity) * 100}
                                                                aria-valuemin={item.quantity}
                                                                aria-valuemax={item.sold + item.quantity}
                                                            >
                                                                <div className="progress-bar"
                                                                     style={{width: "25%"}}></div>
                                                            </div>
                                                        </div>
                                                        <Link className="button" to="">Add to Cart</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                       })

                    }
                </div>
            </Container>

        </Fragment>
    );
};

export default SpecialProduct;