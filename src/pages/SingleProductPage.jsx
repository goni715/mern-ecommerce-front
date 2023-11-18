import React, {Suspense, useEffect} from 'react';
import LazyLoader from "../components/MasterLayout/LazyLoader";
import {useLocation, useParams} from "react-router-dom";
import {GetProductRequest, ProductListRequest} from "../ApiServices/ProductApiRequest";
import {useSelector} from "react-redux";
import {selectProductName} from "../redux/state-slice/productSlice";
import {getToken} from "../helper/SessionHelper.js";
import {CartListRequest} from "../ApiServices/CartApiRequest.js";
const Header = React.lazy(() => import('../components/Header/Header'));
const Footer = React.lazy(() => import('../components/Footer/Footer'));
const TitleMetaTag = React.lazy(() => import('../components/TitleMetaTag'));
const BreadCrumb = React.lazy(() => import('../components/BreadCrumb'));
const SingleProduct = React.lazy(() => import('../components/SingleProduct/SingleProduct'));


const SingleProductPage = () => {

    const params = useParams();


    const { pathname } = useLocation();

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);



    let ProductName=useSelector(selectProductName);



    return (
        <>
            <Suspense fallback={LazyLoader}>
                <TitleMetaTag title="Product"/>
                <Header/>
                <BreadCrumb title={ProductName}/>
                <SingleProduct id={params['id']}/>
                <Footer/>
            </Suspense>
        </>
    );
};

export default SingleProductPage;