import React, {useRef} from 'react';
import './Checkout.css';
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import Container from "../Container/Container";
import {useSelector} from "react-redux";
import {selectCartList, selectTotalAmount} from "../../redux/state-slice/cartSlice";
import {ErrorToast, IsEmpty,} from "../../helper/ValidationHelper";
import {CreateOrderWithPaymentRequest} from "../../ApiServices/OrderApiRequest";
import {getUserDetails} from "../../helper/SessionHelper";


const Checkout = () => {

    let countryRef, addressRef, firstNameRef, lastNameRef, cityRef, otherRef, pincodeRef = useRef();


    const CartList = useSelector(selectCartList);
    const TotalAmount = useSelector(selectTotalAmount);





    const Submit=async () => {

        let country = countryRef.value.trim();
        let address = addressRef.value;
        let city = cityRef.value;


        if(IsEmpty(country)) {
            ErrorToast("Select Country");
        }
        else if(IsEmpty(address)){
            ErrorToast("Address Required");
        }
        else if(IsEmpty(city)){
            ErrorToast("Provide City Name");
        }

        else{
            await CreateOrderWithPaymentRequest(country, address, city,CartList, TotalAmount);
        }
    }




    return (
        <>
           <Container class1="checkout-wrapper py-5 storeBackground">
                   <div className="row">
                       <div className="col-7">
                           <div className="checkout-left-data">
                               {/*<h3 className="website-name">Dev Corner</h3>*/}
                               <nav aria-label="breadcrumb">
                                   <ol className="breadcrumb">
                                       <li className="breadcrumb-item total-price">
                                           <Link className="text-dark" to="/cart">Cart</Link>
                                       </li>
                                       <li className="breadcrumb-item total-price active" aria-current="page">Information</li>
                                       <li className="breadcrumb-item active">
                                           Shipping
                                       </li>
                                       <li className="breadcrumb-item total-price active" aria-current="page">
                                           Payment
                                       </li>
                                   </ol>
                               </nav>


                               <h4 className="title total">Contact Information</h4>
                               <p className="user-details">
                                   {getUserDetails()?.firstName + " "+ getUserDetails()?.lastName +" (" + getUserDetails()?.email+")"}
                               </p>
                               <div className="d-flex flex-wrap gap-15 justify-content-between">
                                   <div className="w-100">
                                       <select ref={(select)=>countryRef=select} className="form-control form-select" name="" id="">
                                          <option value="" selected disabled>Select Country</option>
                                          <option value="Bangladesh">Bangladesh</option>
                                           <option value="India">India</option>
                                           <option value="Pakistan">Pakistan</option>
                                       </select>
                                   </div>
                                   <div className="w-100">
                                       <input ref={(input)=>addressRef=input} type="text" placeholder="Local Address" className="form-control"/>
                                   </div>
                                   <div className="w-50">
                                       <input ref={(input)=>cityRef=input} type="text" placeholder="City" className="form-control"/>
                                   </div>
                                   {/*<div className="flex-grow-1">
                                       <input ref={(input)=>pincodeRef=input} type="text" placeholder="Postal Code" className="form-control"/>
                                   </div>*/}
                                   <div className="w-100">
                                       <div className="d-flex justify-content-between align-items-center">
                                           <Link to="/cart" className="text-dark">
                                               <BiArrowBack className="me-2"/> Return to Cart
                                           </Link>
                                           <Link to="/store" className="button">Continue to Shipping</Link>
                                           <button onClick={Submit} className="button signup">Place Order</button>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="col-5">
                           <div className="border-bottom py-4">
                               {
                                   CartList.map((item,i)=>{
                                       return (
                                           <>
                                               <div key={i.toString()} className="d-flex gap-10 mb-2 align-items-center">
                                                   <div className="w-75 d-flex gap-10">
                                                       <div className="w-25 position-relative">
                                                           <span style={{top:"-10px", right: "2px"}} className="badge bg-secondary text-white rounded-circle p-2 position-absolute">{item?.quantity}</span>
                                                           <img className="img-fluid" src={item['ProductDetails'][0]['images'][0]['image_url']} alt="product"/>
                                                       </div>
                                                       <div>
                                                           <h5 className="total-price">{item['ProductDetails'][0]['ProductName']}</h5>
                                                           <p className="total-price">S / {item['Colors'][0]['ColorName']}</p>
                                                       </div>
                                                   </div>
                                                   <div className="flex-grow-1">
                                                       <h5 className="total">${item?.quantity * item['ProductDetails'][0]['price']}</h5>
                                                   </div>
                                               </div>
                                           </>
                                       )
                                   })
                               }
                           </div>
                           <div className="border-bottom py-4">
                               <div className="d-flex justify-content-between align-items-center">
                                   <p className="total">Subtotal</p>
                                   <p className="total-price"> ${TotalAmount !== "" ? TotalAmount : "0"}</p>
                               </div>
                               <div className="d-flex justify-content-between align-items-center">
                                   <p className="mb-0 total">Shipping</p>
                                   <p className="mb-0 total-price"> $5</p>
                               </div>
                           </div>
                           <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                               <h4 className="total">Total</h4>
                               <h5 className="total-price"> ${TotalAmount !== "" ? TotalAmount+5 : "0"}</h5>
                           </div>
                           <div></div>
                       </div>
                   </div>
           </Container>
        </>
    );
};

export default Checkout;