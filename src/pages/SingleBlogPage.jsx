import React, {Suspense, useEffect} from 'react';
import LazyLoader from "../components/MasterLayout/LazyLoader";
import {useLocation, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectBlogName} from "../redux/state-slice/blogSlice.js";
const Header = React.lazy(() => import('../components/Header/Header'));
const Footer = React.lazy(() => import('../components/Footer/Footer'));
const TitleMetaTag = React.lazy(() => import('../components/TitleMetaTag'));
const BreadCrumb = React.lazy(() => import('../components/BreadCrumb'));
const SingleBlog = React.lazy(() => import('../components/Blog/SingleBlog'));


const SingleBlogPage = () => {

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

    let BlogName=useSelector(selectBlogName);


    return (
        <>
            <Suspense fallback={LazyLoader}>
                <TitleMetaTag title="Dynamic BlogList Name"/>
                <Header/>
                <BreadCrumb title={BlogName}/>
                <SingleBlog id={params['id']}/>
                <Footer/>
            </Suspense>
        </>
    );
};

export default SingleBlogPage;