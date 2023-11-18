import React, {Fragment, Suspense, useEffect} from 'react';
import LazyLoader from "../components/MasterLayout/LazyLoader";
import {useLocation} from "react-router-dom";
const Header = React.lazy(() => import('../components/Header/Header'));
const Footer = React.lazy(() => import('../components/Footer/Footer'));
const BreadCrumb = React.lazy(() => import('../components/BreadCrumb'));
const TitleMetaTag = React.lazy(() => import('../components/TitleMetaTag'));
const OurStore = React.lazy(() => import('../components/OurStore/OurStore'));


const StorePage = () => {



    const { pathname } = useLocation();


    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);










    return (
        <>
            <Suspense fallback={LazyLoader}>
                <TitleMetaTag title="Our Store"/>
                <Header/>
                <BreadCrumb title="Our Store"/>
                <OurStore/>
                <Footer/>
            </Suspense>
        </>
    );
};

export default StorePage;