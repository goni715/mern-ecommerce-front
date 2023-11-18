import React from 'react';
import {Link, useLocation} from "react-router-dom";
import WishPic from "../../assets/images/wish.svg";
import ReactStars from "react-rating-stars-component";
import {AddWishlistRequest} from "../../ApiServices/ProductApiRequest";
import {getToken} from "../../helper/SessionHelper";
import {useSelector} from "react-redux";
import {selectLoading} from "../../redux/state-slice/settingsSlice.js";

const ProductCard = ({grid, ProductList}) => {

   let location = useLocation();


    const ratingChanged = (newRating) => {
        //console.log(newRating);
        alert(newRating); //Catch New Value
    };



    const AddWishlist = async (id) => {

        if(getToken()){
            await AddWishlistRequest(id);
        }


    }



    let loading = useSelector(selectLoading);




    return (
        <>

            {loading
                ? "Loading Products..."
                : ProductList?.map((item,i)=>{
                    return(
                        <>
                            <div key={i.toString()} className={location.pathname === "/store" ? "gr-"+grid : "col-3"}>
                                <Link to={"/single-product/"+item._id} className="product-card position-relative">
                                    <div className="wishlist-icon position-absolute">
                                        <Link to={!getToken() ? "/login" : "/store"} onClick={AddWishlist.bind(this, item._id)} ><img src={WishPic} alt="wish list" /></Link>
                                    </div>
                                    <div className="product-image">
                                        <img className="img-fluid" src={item.images[0].image_url} alt="features"/>
                                       <img className="img-fluid" src={item.images[1].image_url} alt="features"/>
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
                                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                                            {item.description.substring(1,200)}
                                        </p>
                                        <p className="price">${item.price}</p>
                                    </div>
                                    <div className="action-bar position-absolute">
                                        <div className="d-flex flex-column gap-15">
                                            { /*<Link to="">
                                                <img src={ProdComparePic} alt="compare"/>
                                            </Link>*/}

                                            {/* <Link to={"/single-product/"+item?._id}>
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
                })
            }


        </>
    );
};

export default ProductCard;