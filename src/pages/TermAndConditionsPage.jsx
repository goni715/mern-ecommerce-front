import React, {Suspense} from 'react';
import LazyLoader from "../components/MasterLayout/LazyLoader";
const Header = React.lazy(() => import('../components/Header/Header'));
const Footer = React.lazy(() => import('../components/Footer/Footer'));
const TitleMetaTag = React.lazy(() => import('../components/TitleMetaTag'));
const BreadCrumb = React.lazy(() => import('../components/BreadCrumb'));
const TermConditions = React.lazy(() => import('../components/Policy/TermConditions'));


const TermAndConditionsPage = () => {
    return (
        <>
            <Suspense fallback={LazyLoader}>
                <TitleMetaTag title="Term And Conditions"/>
                <Header/>
                <BreadCrumb title="Term & Conditions"/>
                <TermConditions/>
                <Footer/>
            </Suspense>

        </>
    );
};

export default TermAndConditionsPage;