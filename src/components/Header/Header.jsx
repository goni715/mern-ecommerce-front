import React, {Fragment, useEffect, useState} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import './Header.css';
import { BsSearch } from "react-icons/bs";
import WishListPic from '../../assets/images/wishlist.svg';
import UserPic from '../../assets/images/user.svg';
import CartPic from '../../assets/images/cart.svg';
import MenuPic from '../../assets/images/menu.svg';
import {useSelector} from "react-redux";
import {selectCartList, selectTotalAmount, SetTotalAmount} from "../../redux/state-slice/cartSlice";
import {CartListRequest} from "../../ApiServices/CartApiRequest";
import store from "../../redux/store/store";
import {getToken, getUserDetails} from "../../helper/SessionHelper";
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import {ProductListRequest} from "../../ApiServices/ProductApiRequest";
import {selectProductList} from "../../redux/state-slice/productSlice";


const Header = () => {

    const [productOptions, setproductOptions] = useState([]);
    const navigate = useNavigate();



    useEffect(()=>{
        (async () => {
            await ProductListRequest();
            if(getToken()){
                await CartListRequest();
            }
        })();
    },[])



    const CartList = useSelector(selectCartList);

    useEffect(()=>{
        let sum =0;
        for(let i=0; i < CartList.length; i++){
            sum = Number(sum)+(Number(CartList[i].quantity) * Number(CartList[i]['ProductDetails'][0]['price']));
            //setTotalAmount(sum);
            store.dispatch(SetTotalAmount(sum));
        }
    },[CartList]);







    const TotalAmount = useSelector(selectTotalAmount);
    let ProductList = useSelector(selectProductList);

    useEffect(()=>{

        let data = [];

         for(let i=0; i < ProductList.length; i++){
              let myObject = {
                  id:i,
                  productID: ProductList[i]['_id'],
                  name: ProductList[i]['ProductName']
              }
              data.push(myObject);
         }
         setproductOptions(data);


    },[ProductList])


    const handleLogout = () => {
        localStorage.clear();
       // window.location.reload()
        window.location.href="/";
    }





    return (
        <Fragment>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                           <p className="text-white mb-0">Free Shipping Over $100 & Free Returns</p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white">
                                Hotline: <a className="text-white" href="tel:+91 8264954234"> +91 8264954234</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link to="" className="text-white">Osman Goni</Link>
                            </h2>
                        </div>
                        <div className="col-5">

                            <div className="input-group">
                                <Typeahead
                                    id="pagination-example"
                                    onPaginate={() => console.log('Results paginated')}
                                    onChange={(selected) =>{
                                        navigate("/single-product/"+selected[0].productID);
                                    }}
                                    options={productOptions}
                                    labelKey={"name"}
                                    minLength={2}
                                    placeholder="Search for Products here..."
                                />
                                <div className="input-group-append">
                                    <span className="input-group-text p-2" id="basic-addon2"><BsSearch className="fs-4"/></span>
                                </div>
                            </div>

                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">

                                <div>
                                    <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                                        <img src={WishListPic} alt="" />
                                        <p className="mb-0">
                                            Favourite <br/> wishlist
                                        </p>
                                    </Link>
                                </div>

                                <div>
                                    {/*If There is no Token*/}
                                    <Link to={!getToken() ? "/login" : "/my-profile"} className="d-flex align-items-center gap-10 text-white">
                                        <img src={UserPic} alt="user" />
                                        {
                                            !getToken() ?  (<p className="mb-0">
                                                Login in <br/> My Account
                                            </p>) :  <p className="mb-0">
                                                Welcome {getUserDetails()?.firstName}
                                            </p>
                                        }

                                    </Link>
                                </div>

                                <div>
                                    <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                                        <img src={CartPic} alt="cart" />
                                        <div className="d-flex flex-column">
                                            <span className="badge bg-white text-dark">{CartList.length}</span>
                                            <p className="mb-0">${TotalAmount !== "" ? TotalAmount : "00"}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-bottom py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div >
                                    {/*<img src={MenuPic} alt="menu" />*/}
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                            <img src={MenuPic} alt="menu" />
                                            <span className="me-5 d-inline-block">Shop Categories</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="menu-links">
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/store">Our Store</NavLink>
                                        <NavLink to={!getToken() ? "/login" : "/my-orders"}>My Orders</NavLink>
                                        <NavLink to="/blog">Blogs</NavLink>
                                        <NavLink to="/contact">Contact</NavLink>
                                        {
                                            getToken() && (
                                                <button onClick={handleLogout} className="border border-0 bg-transparent text-white text-uppercase">Logout</button>
                                            )
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


        </Fragment>
    );
};

export default Header;