import React, {Fragment, Suspense, useEffect} from 'react';
import LazyLoader from "../components/MasterLayout/LazyLoader";
import {useLocation} from "react-router-dom";
const Header = React.lazy(() => import('../components/Header/Header'));
const Footer = React.lazy(() => import('../components/Footer/Footer'));
const HomeBanner = React.lazy(() => import('../components/Home/HomeBanner'));
const HomeService = React.lazy(() => import('../components/Home/HomeService'));
const HomeCategory = React.lazy(() => import('../components/Home/HomeCategory'));
const HomeMarquee = React.lazy(() => import('../components/Home/HomeMarquee'));
const BlogCard = React.lazy(() => import('../components/Home/HomeBlog'));
const SpecialProduct = React.lazy(() => import('../components/Home/SpecialProduct'));
const Feature = React.lazy(() => import('../components/Home/Feature'));
const PopularProduct = React.lazy(() => import('../components/PopularProduct/PopularProduct'));
const FamousCard = React.lazy(() => import('../components/Home/FamousCard'));
const TitleMetaTag = React.lazy(() => import('../components/TitleMetaTag'));



const HomePage = () => {



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
              <TitleMetaTag title="Ecommerce App"/>
              <Header/>
              <HomeBanner/>
              <HomeService/>
              <HomeCategory/>
              <Feature/>
              <FamousCard/>
              {/* <SpecialProduct/>*/}
              <PopularProduct/>
              <HomeMarquee/>
              <BlogCard/>
              <Footer/>
          </Suspense>
        </>
    );
};

export default HomePage;