import React, {Suspense} from 'react';
import LazyLoader from "../components/MasterLayout/LazyLoader";
const Header = React.lazy(() => import('../components/Header/Header'));
const Footer = React.lazy(() => import('../components/Footer/Footer'));
const TitleMetaTag = React.lazy(() => import('../components/TitleMetaTag'));
const BreadCrumb = React.lazy(() => import('../components/BreadCrumb'));
const Wishlist = React.lazy(() => import('../components/Wishlist/Wishlist'));


const WishlistPage = () => {
    return (
        <>
            <Suspense fallback={LazyLoader}>
                <TitleMetaTag title="Wishlist"/>
                <Header />
                <BreadCrumb title="Wishlist"/>
                <Wishlist/>
                <Footer/>
            </Suspense>
        </>
    );
};

export default WishlistPage;