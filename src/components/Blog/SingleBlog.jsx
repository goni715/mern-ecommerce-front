import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {HiOutlineArrowLeft} from "react-icons/hi";
import Container from "../Container/Container";
import {GetBlogRequest} from "../../ApiServices/BlogApiRequest";
import {useSelector} from "react-redux";
import {selectBlogDesc, selectBlogImage, selectBlogName} from "../../redux/state-slice/blogSlice";

const SingleBlog = ({id}) => {

    const navigate = useNavigate();



    useEffect(()=>{
        (async () => {
            await GetBlogRequest(id);
        })();
    },[])



    let BlogName=useSelector(selectBlogName);
    let BlogDesc=useSelector(selectBlogDesc);
    let BlogImage=useSelector(selectBlogImage);//This is an Array





    const goBack = () => {
        navigate(-1);
    };



    return (
        <>
            <Container class1="blog-wrapper py-5 storeBackground">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link onClick={goBack} to="" className="d-flex align-items-center">
                                    <HiOutlineArrowLeft className="fs-4"/> Go back to blogs
                                </Link>
                                <h3 className="title">{BlogName}</h3>
                                {
                                    BlogImage?.map((item,i)=>{
                                        if(i < 1){
                                            return (
                                                <>
                                                    <img key={i.toString()} src={item.image_url} style={{width:"600px", height:"500px"}} className="img-fluid my-4" alt="blog"/>
                                                </>

                                            );
                                        }
                                    })
                                }
                                <p>
                                    {BlogDesc}
                                </p>
                            </div>
                        </div>
                    </div>
            </Container>

        </>
    );
};

export default SingleBlog;