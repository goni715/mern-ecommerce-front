import React, {Suspense} from 'react';
import LazyLoader from "../components/MasterLayout/LazyLoader";
import {useParams} from "react-router-dom";
const Header = React.lazy(() => import('../components/Header/Header'));
const Footer = React.lazy(() => import('../components/Footer/Footer'));
const TitleMetaTag = React.lazy(() => import('../components/TitleMetaTag'));
const BreadCrumb = React.lazy(() => import('../components/BreadCrumb'));
const ResetPassword = React.lazy(() => import('../components/Authentication/RecoverPasswordWithLink/ResetPassword'));


const ResetPasswordPage = () => {
    const params = useParams();

    return (
        <>
            <Suspense fallback={LazyLoader}>
                <TitleMetaTag title="Reset Password"/>
                <Header/>
                <BreadCrumb title="Reset Password"/>
                <ResetPassword email={params['email']} token={params['token']}/>
                <Footer/>
            </Suspense>
        </>
    );
};

export default ResetPasswordPage;