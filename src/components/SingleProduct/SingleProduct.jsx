import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import WishPic from "../../assets/images/wish.svg";
import ReactStars from "react-rating-stars-component";
import ProdComparePic from "../../assets/images/prodcompare.svg";
import ViewPic from "../../assets/images/view.svg";

import Color from "../Color/Color";
import {AiOutlineHeart} from "react-icons/ai";
import {TbGitCompare} from "react-icons/tb";
import Container from "../Container/Container";
import {
    AddWishlistRequest,
    GetProductRequest,
    ProductListRequest,
    RatingRequest
} from "../../ApiServices/ProductApiRequest";
import {
    ErrorToast,
    IsEmpty,
} from "../../helper/ValidationHelper";
import {useDispatch, useSelector} from "react-redux";
import {
    selectBrandName,
    selectCategoryName,
    selectPopularProduct, selectProductColor,
    selectProductDesc, selectProductID,
    selectProductImage,
    selectProductName,
    selectProductPrice,
    selectProductTag, selectRatings,
    selectSelectedImage, selectStar, selectTotalRating,
    SetSelectedImage, SetStar
} from "../../redux/state-slice/productSlice";
import {AddProductToCartRequest, CartListRequest} from "../../ApiServices/CartApiRequest";
import {selectCartList, selectCartProductColor} from "../../redux/state-slice/cartSlice";
import {getToken} from "../../helper/SessionHelper";
import store from "../../redux/store/store";




const SingleProduct = ({id}) => {

    let quantityRef, commentRef = useRef();
    const [alreadyAdded, setAlreadyAdded] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();




    useEffect(()=>{
        (async () => {
            await GetProductRequest(id);
            await ProductListRequest();
            if(getToken()){
                await CartListRequest();
            }
        })();
    },[id])


    let SelectedImage = useSelector(selectSelectedImage);
    const CartList = useSelector(selectCartList);


    useEffect(()=>{
          for(let i=0; i < CartList.length; i++){
              if(id === CartList[i]['ProductID']){
               setAlreadyAdded(true);
          }
         }
    },[CartList]);







    let ProductName=useSelector(selectProductName);
    let CategoryName=useSelector(selectCategoryName);
    let BrandName=useSelector(selectBrandName);
    let ProductDesc=useSelector(selectProductDesc);
    let ProductPrice=useSelector(selectProductPrice);
    let ProductTag=useSelector(selectProductTag);
    let ProductImage=useSelector(selectProductImage);//Array
    let ProductColor=useSelector(selectProductColor);//Array
    let TotalRating=useSelector(selectTotalRating);
    let Ratings=useSelector(selectRatings); //Array
    let ProductID=useSelector(selectProductID);
    let CartProductColor=useSelector(selectCartProductColor);

    let PopularProducts = useSelector(selectPopularProduct); //This is an Array
    let star = useSelector(selectStar);







    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }





    const AddCart = async () => {

            let quantity = quantityRef.value;
            if(IsEmpty(CartProductColor)) {
                ErrorToast("Please Choose Color");
            }

           else {

                   if (getToken()){
                        let result = await AddProductToCartRequest(ProductID, quantity, CartProductColor);
                         if (result) {
                            navigate('/cart');
                          }
                  }
                  else{
                     navigate('/login');
                  }

           }

    }




    const AddWishlist = async (id) => {
        if (getToken()){
            await AddWishlistRequest(id);
        }
        else{
            navigate('/login')
        }

    }




  //Add Rating//Add Review
    const ratingChanged = (newRating) => {
        //alert(newRating); //Catch New Value
        store.dispatch(SetStar(newRating));
    };



    const AddRating = async () => {
        let comment = commentRef.value;

        if(getToken()){
            if(star ===0){
                ErrorToast("Please, add Star Rating");
            }
            else if(IsEmpty(comment)) {
                ErrorToast("Please write Review About the Product");
            }
            else{
                let result = await RatingRequest(star, id, comment);
                if(result ===true){
                    store.dispatch(SetStar(0));
                    commentRef.value="";
                    await GetProductRequest(id);
                }
            }
        }
        else{
            navigate('/login');
        }


    }




    return (
        <>
           <Container class1="main-product-wrapper py-5 storeBackground">
                   <div className="row">
                       <div className="col-6">
                           <div className="main-product-image">
                               <div>
                                   <img src={SelectedImage} alt="single product"/>
                               </div>
                           </div>
                           <div className="other-product-images d-flex flex-wrap gap-15">
                               {
                                   ProductImage?.map((item,i)=>{
                                           return (
                                               <>
                                                   <div key={toString()}>
                                                       <img src={item.image_url} onClick={() => dispatch(SetSelectedImage(item.image_url))} style={{height: "150px"}} className="img-fluid" alt="car"/>
                                                   </div>
                                               </>

                                           );
                                   })
                               }

                           </div>
                       </div>
                       <div className="col-6">
                           <div className="main-product-details">
                               <div className="border-bottom">
                                   <h3 className="title">
                                       {ProductName}
                                   </h3>
                               </div>
                               <div className="border-bottom py-3">
                                   <p className="price">${ProductPrice}</p>
                                   <div className="d-flex align-items-center gap-10">
                                       <ReactStars
                                           key={Date.now()}
                                           count={5}
                                           onChange={ratingChanged}
                                           size={24}
                                           activeColor="#ffd700"
                                           value={TotalRating}
                                           isHalf={true}
                                           edit={false}
                                       />
                                       <p className="mb-0 t-review">{Ratings.length} reviews</p>
                                   </div>
                                   <a className="review-btn" href="#review">Write a review</a>
                               </div>
                               <div className="border-bottom py-3">
                                   <div className="d-flex gap-10 align-items-center my-2">
                                       <h3 className="product-heading">Brand :</h3>
                                       <p className="product-data">{BrandName}</p>
                                   </div>
                                   <div className="d-flex gap-10 align-items-center my-2">
                                       <h3 className="product-heading">Category :</h3>
                                       <p className="product-data">{CategoryName}</p>
                                   </div>
                                   <div className="d-flex gap-10 align-items-center my-2">
                                       <h3 className="product-heading">Tags :</h3>
                                       <p className="product-data">{ProductTag}</p>
                                   </div>
                                   <div className="d-flex gap-10 align-items-center my-2">
                                       <h3 className="product-heading">Availability :</h3>
                                       <p className="product-data">In Stock</p>
                                   </div>
                                   <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                       <h3 className="product-heading">Size :</h3>
                                       <div className="d-flex flex-wrap gap-15">
                                           <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                           <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                           <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                                           <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                           <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                                       </div>
                                   </div>
                                   {
                                       alreadyAdded === false && (
                                           <>
                                               <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                                   <h3 className="product-heading">Color :</h3>
                                                   <Color colors={ProductColor}/>
                                               </div>
                                           </>
                                       )
                                   }
                                   <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">

                                       {
                                           alreadyAdded === false && (
                                               <>
                                                   <h3 className="product-heading">Quantity :</h3>
                                                   <div className="">
                                                       <input defaultValue={1} ref={(input)=>quantityRef=input} type="number" name="" min={1} max={10} className="form-control" style={{width:"70px"}} id=""/>
                                                   </div>
                                               </>
                                           )
                                       }

                                       <div className={"d-flex align-items-center gap-30" +alreadyAdded ===true ? "ms-0" : "ms-5"} >
                                           <button
                                               onClick={()=>{alreadyAdded ===true ? navigate('/cart') : AddCart()}}
                                               className="button border-0">
                                               {alreadyAdded ===true ? "Go To Cart" : "Add to Cart"}
                                           </button>
                                           {/*<button className="button signup">Buy it Now</button>*/}
                                       </div>
                                   </div>
                                   <div className="d-flex align-items-center gap-15">
                                       <div>
                                           <a href="">
                                               <TbGitCompare className="fs-5 me-2" /> Add to Compare
                                           </a>
                                       </div>
                                       <div>
                                           <a href="">
                                               <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                                           </a>
                                       </div>
                                   </div>
                                   <div className="d-flex gap-10 flex-column my-3">
                                       <h3 className="product-heading">Shipping & Returns</h3>
                                       <p className="product-data">
                                           Free shipping and returns available on all orders! <br/> We ship all US domestic orders with <b>within 5-10 business days</b>
                                       </p>
                                   </div>
                                   <div className="d-flex gap-10 align-items-center my-3">
                                       <h3 className="product-heading"> Product Link :</h3>
                                       <a
                                           href="javascript:void(0);"
                                           onClick={()=>{
                                               copyToClipboard(
                                                   //"https://www.pexels.com/photo/black-and-white-fashion-man-beach-15529188/"
                                                   window.location.href
                                               )}}>
                                           Copy Product Link
                                       </a>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
           </Container>

            <Container class1="description-wrapper py-5 storeBackground">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                           <div className="bg-white p-3">
                               <p>
                                   {ProductDesc}
                               </p>
                           </div>
                        </div>
                    </div>
            </Container>

            <Container class1="reviews-wrapper storeBackground">
                    <div className="row">
                        <div className="col-12">
                            <h3 id="review" className="mb-2"> Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className="mb-2">Customer Reviews</h4>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars
                                                key={Date.now()}
                                                count={5}
                                                size={24}
                                                activeColor="#ffd700"
                                                value={TotalRating}
                                                isHalf={true}
                                                edit={false}
                                            />
                                            <p className="mb-0">Based on {Ratings.length} Reviews</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="review-form py-4">
                                    <h4>Write a Review</h4>
                                    <div className="d-flex flex-column gap-15">
                                        <div>
                                            <ReactStars
                                                key={Date.now()}
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                activeColor="#ffd700"
                                                isHalf={true}
                                                edit={true}
                                                value={star}
                                            />
                                        </div>
                                        <div>
                                            <textarea ref={(input)=>commentRef=input} className="form-control w-100" cols="30" rows="4" placeholder="Comments"></textarea>
                                        </div>
                                        <div className="d-flex justify-content-end mt-3">
                                            <button onClick={AddRating} className="button border-0">Submit Review</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="reviews mt-4">

                                    {
                                      Ratings && Ratings?.map((item,i)=>{
                                                return(
                                                    <>
                                                        <div key={i.toString()} className="review">
                                                            <div className="d-flex gap-10 align-items-center">
                                                                <h6 className="mb-0">{item.firstName} {item.lastName}</h6>
                                                                <ReactStars
                                                                    key={i.toString()}
                                                                    count={5}
                                                                    size={24}
                                                                    activeColor="#ffd700"
                                                                    value={item.star}
                                                                    isHalf={true}
                                                                    edit={false}
                                                                />
                                                            </div>
                                                            <p className="mt-3">{item.comment}</p>
                                                        </div>
                                                    </>
                                                )
                                            })
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
            </Container>

            <Container class1="popular-wrapper py-5 home-service">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Our Popular Products</h3>
                        </div>
                    </div>
                    <div className="row">
                        {
                            PopularProducts?.map((item,i)=> {
                                    return (
                                        <>
                                            <div key={i.toString()} className="col-3">
                                                <Link to={"/single-product/"+item._id} className="product-card position-relative">
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
                                                            <Link to={"/single-product/"+item?._id}>
                                                                <img src={ViewPic} alt="addcart"/>
                                                            </Link>
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


                    </div>
            </Container>
        </>
    );
};

export default SingleProduct;