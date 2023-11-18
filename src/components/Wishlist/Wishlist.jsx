import React, {useEffect} from 'react';
import CrossPic from "../../assets/images/cross.svg";
import {GetWishlistRequest, RemoveWishListRequest} from "../../ApiServices/ProductApiRequest";
import {useSelector} from "react-redux";
import {selectWishlist} from "../../redux/state-slice/productSlice";

const Wishlist = () => {


    useEffect(()=>{
        (async () => {
            await GetWishlistRequest();
        })();
    },[])


    const Wishlist = useSelector(selectWishlist);



    const RemoveWishList = async (id) => {
        await RemoveWishListRequest(id);
    }



    return (
        <>
          <div className="wishlist-wrapper storeBackground py-5">
              <div className="container">
                  <div className="row">

                      {Wishlist.length === 0 && (
                              <>
                               <div className="text-center fs-3">There is no Wishlist Products</div>
                              </>
                      )}

                      {
                          Wishlist?.map((item,i)=>{
                              return(
                                  <>
                                      <div key={i.toString()} className="col-3">
                                          <div className="wishlist-card position-relative">
                                              {/*<img onClick={RemoveWishList.bind(this, item._id)} src={CrossPic} alt="cross" className="position-absolute cross img-fluid"/>*/}
                                              <button onClick={RemoveWishList.bind(this, item._id)} className="btn btn-close float-end"></button>
                                              <div className="wishlist-card-image">
                                                 <img src={item.images[0].image_url} alt="watch" className="wishlist-img img-fluid w-100"/>
                                                  {/*<img src={Watch} alt="watch" className="img-fluid w-100"/>*/}
                                              </div>
                                              <div className="py-3 px-3">
                                                  <h5 className="title">
                                                      {item.ProductName}
                                                  </h5>
                                                  <h6 className="price mb-3 mt-3"> {item.price}</h6>
                                              </div>
                                          </div>
                                      </div>

                                  </>
                              )
                          })
                      }

                  </div>
              </div>
          </div>
        </>
    );
};

export default Wishlist;