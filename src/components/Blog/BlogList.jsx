import React, {Fragment, useEffect} from 'react';
import './Blog.css'
import BlogCard from "../BlogCard";
import Container from "../Container/Container";
import {BlogListRequest, FilterBlogsRequest} from "../../ApiServices/BlogApiRequest";
import {useSelector} from "react-redux";
import {selectBlogList, selectFilterBlogs, SetFilterBlogs} from "../../redux/state-slice/blogSlice";
import {BlogCategoryListRequest} from "../../ApiServices/BlogCategoryApiRequest";
import {selectBlogCategoryList} from "../../redux/state-slice/blogCategorySlice";
import store from "../../redux/store/store";
import {selectLoading} from "../../redux/state-slice/settingsSlice.js";

const BlogList = () => {


    useEffect(()=>{
        (async () => {
            await BlogListRequest();
            await BlogCategoryListRequest();
            await FilterBlogsRequest();
        })();
    },[])



    const BlogList = useSelector(selectBlogList);
    const FilterBlogs = useSelector(selectFilterBlogs);
    const BlogCategoryList = useSelector(selectBlogCategoryList);
    let loading = useSelector(selectLoading);

    const handleClick =async (categoryName) => {
        let result = BlogCategoryList.find((currentValue)=>currentValue.CategoryName === categoryName);
        let categoryId = result._id;
        let products = BlogList.filter((currentValue)=>currentValue.CategoryID.toString() === categoryId.toString());
        store.dispatch(SetFilterBlogs(products));

    }



    return (
        <Fragment>
            <Container class1="blog-wrapper py-5">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">Find By Categories</h3>
                                <div>
                                    <ul className="ps-0">
                                        {
                                            BlogCategoryList && BlogCategoryList?.map((item,i)=>{
                                                return(
                                                    <>
                                                        <li onClick={handleClick.bind(this, item.CategoryName)} key={i.toString()}>{item.CategoryName}</li>
                                                    </>
                                                )
                                            })
                                        }


                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                { loading
                                    ? "Loading Blogs..."
                                    : FilterBlogs?.map((item,i)=>{
                                      return (
                                          <div key={i.toString()} className="col-6 mb-3">
                                              <BlogCard item={item}/>
                                          </div>
                                      );
                                   })
                                }

                            </div>
                        </div>
                    </div>
            </Container>
        </Fragment>
    );
};

export default BlogList;