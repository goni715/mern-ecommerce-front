import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import moment from 'moment';

const BlogCard = ({item}) => {


    //dangerouslySetInnerHTML={{__html: (item.description).substring(0, 70)}}


    return (
        <Fragment>

                <div className="blog-card">
                    <div className="card-image">
                        <img className="img-fluid w-100" src={item.images[0].image_url} alt="blog"/>
                    </div>
                    <div className="blog-content">
                        <p className="date">{moment(item.createdAt).format('MMMM Do YYYY, h:mm a')}</p>
                        <h5 className="title">{item.BlogName}</h5>
                        <p className="desc">
                            {(item.description).substring(0, 60) + "..."}
                        </p>
                        <Link to={"/single-blog/"+item._id} className="button">Read More</Link>
                    </div>
                </div>
        </Fragment>
    );
};

export default BlogCard;