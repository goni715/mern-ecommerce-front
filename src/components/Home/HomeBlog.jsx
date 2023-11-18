import React, {Fragment, useEffect} from 'react';
import './Home.css';
import BlogCard from "../BlogCard";
import Container from "../Container/Container";
import {BlogListRequest} from "../../ApiServices/BlogApiRequest";
import {useSelector} from "react-redux";
import {selectBlogList} from "../../redux/state-slice/blogSlice";


const HomeBlog = () => {


    useEffect(()=>{
        (async () => {
            await BlogListRequest();
        })();
    },[])



    const BlogList = useSelector(selectBlogList);




    return (
        <Fragment>

            <Container class1="blog-wrapper py-5 home-service">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Our Latest Blogs</h3>
                    </div>
                </div>
                <div className="row">

                    { BlogList && BlogList?.map((item,i)=>{

                        if(i <4){
                            return (
                                <>
                                    <div key={i.toString()} className="col-3">
                                        <BlogCard item={item}/>
                                    </div>
                                </>
                            );
                        }
                    })
                    }

                </div>
            </Container>
        </Fragment>
    );
};

export default HomeBlog;