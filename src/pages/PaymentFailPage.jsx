import React, {Suspense} from 'react';
import {useParams} from "react-router-dom";
import LazyLoader from "../components/MasterLayout/LazyLoader";
const Header = React.lazy(() => import('../components/Header/Header'));
const Footer = React.lazy(() => import('../components/Footer/Footer'));
const TitleMetaTag = React.lazy(() => import('../components/TitleMetaTag'));
const PaymentFail = React.lazy(() => import('../components/PaymentFail/PaymentFail'));

const PaymentFailPage = () => {

    const params = useParams();








    return (
        <>
            <Suspense fallback={LazyLoader}>
                <TitleMetaTag title="Payment Failed"/>
                <Header/>
                <PaymentFail tranId={params['tranId']}/>
                <Footer/>
            </Suspense>
        </>
    );
};

export default PaymentFailPage;