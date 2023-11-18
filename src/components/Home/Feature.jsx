import React, {Fragment, useEffect} from 'react';
import './Home.css';
import ReactStars from "react-rating-stars-component/dist/react-stars";
import {Link} from "react-router-dom";
import WishPic from "../../assets/images/wish.svg";
import Container from "../Container/Container";
import {AddWishlistRequest, ProductListRequest} from "../../ApiServices/ProductApiRequest";
import {useSelector} from "react-redux";
import {selectFeatureProduct} from "../../redux/state-slice/productSlice";



const Feature = () => {



    useEffect(()=>{
        (async () => {
            await ProductListRequest();
        })();
    },[])


    let FeatureProducts = useSelector(selectFeatureProduct);





    const ratingChanged = (newRating) => {
        //console.log(newRating);
        alert(newRating); //Catch New Value
    };



    const AddWishlist = async (id) => {
        await AddWishlistRequest(id);
    }




    return (
        <>

            <Container class1="featured-wrapper py-5 home-service">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Features Collection</h3>
                    </div>

                    {
                        FeatureProducts?.map((item,i)=>{
                            if(i <4) {
                                return (
                                    <>
                                        <div key={i.toString()} className="col-3">
                                            <Link to={"/single-product/" + item._id}
                                                  className="product-card position-relative">
                                                <div className="wishlist-icon position-absolute">
                                                    <Link to="" onClick={AddWishlist.bind(this, item._id)}><img
                                                        src={WishPic} alt="wish list"/></Link>
                                                </div>
                                                <div className="product-image">
                                                    <img className="img-fluid" src={item.images[0].image_url}
                                                         alt="features"/>
                                                    <img className="img-fluid" src={item.images[1].image_url}
                                                         alt="features"/>
                                                </div>
                                                <div className="product-details">
                                                    <h6 className="brand">{item['Brand'][0]['BrandName']}</h6>
                                                    <h5 className="product-title">
                                                        {item.ProductName}
                                                    </h5>
                                                    <ReactStars
                                                        count={5}
                                                        onChange={ratingChanged}
                                                        size={24}
                                                        activeColor="#ffd700"
                                                        value={item.totalRating.toString()}
                                                        isHalf={true}
                                                        edit={false}
                                                    />
                                                    <p className="price">{item.price}</p>
                                                </div>
                                                <div className="action-bar position-absolute">
                                                    <div className="d-flex flex-column gap-15">
                                                        {/*<Link to="">
                                                            <img src={ProdComparePic} alt="compare"/>
                                                        </Link>*/}
                                                        {/*<Link to={"/single-product/"+item?._id}>
                                                            <img src={ViewPic} alt="addcart"/>
                                                        </Link>*/}
                                                        {/*<Link to="">
                                                                <img src={CartPic} alt="addcart"/>
                                                            </Link>*/}
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </>
                                )
                            }
                        })
                    }


                </div>
            </Container>

        </>
    );
};

export default Feature;