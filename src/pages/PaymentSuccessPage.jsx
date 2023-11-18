import React, {Suspense} from 'react';
import {useParams} from "react-router-dom";
import LazyLoader from "../components/MasterLayout/LazyLoader";
const Header = React.lazy(() => import('../components/Header/Header'));
const Footer = React.lazy(() => import('../components/Footer/Footer'));
const TitleMetaTag = React.lazy(() => import('../components/TitleMetaTag'));
const PaymentSuccess = React.lazy(() => import('../components/PaymentSuccess/PaymentSuccess'));

const PaymentSuccessPage = () => {

    const params = useParams();

    return (
        <>
            <Suspense fallback={LazyLoader}>
                <TitleMetaTag title="Payment Success"/>
                <Header/>
                <PaymentSuccess tranId={params['tranId']}/>
                <Footer/>
            </Suspense>
        </>
    );
};

export default PaymentSuccessPage;