import React, {Fragment, Suspense, useEffect} from 'react';
import LazyLoader from "../components/MasterLayout/LazyLoader";
import {useLocation} from "react-router-dom";
const Header = React.lazy(() => import('../components/Header/Header'));
const Footer = React.lazy(() => import('../components/Footer/Footer'));
const TitleMetaTag = React.lazy(() => import('../components/TitleMetaTag'));
const BreadCrumb = React.lazy(() => import('../components/BreadCrumb'));
const SignUpVerifyOTP = React.lazy(() => import('../components/Authentication/SignUpVerifyOTP'));

const SignUpVerifyOtpPage = () => {



    const { pathname } = useLocation();
    console.log(pathname);

    useEffect(() => {
        // "document.documentElement.scrollTo" is the magic for React Router Dom v6
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant", // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);






    return (
        <Fragment>
            <Suspense fallback={LazyLoader}>
                <TitleMetaTag title="Sign Up Verify Otp"/>
                <Header/>
                <BreadCrumb title="Sign Up Verify Otp"/>
                <SignUpVerifyOTP/>
                <Footer/>
            </Suspense>
        </Fragment>
    );
};

export default SignUpVerifyOtpPage;