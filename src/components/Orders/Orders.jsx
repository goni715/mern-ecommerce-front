import React, {useEffect} from 'react';
import Container from "../Container/Container";
import {getToken} from "../../helper/SessionHelper";
import {GetMyOrdersRequest} from "../../ApiServices/OrderApiRequest";
import {useSelector} from "react-redux";
import {selectMyOrderList} from "../../redux/state-slice/orderSlice";

const Orders = () => {



    useEffect(()=>{
        (async () => {
            if(getToken()){
                await GetMyOrdersRequest();
            }
        })();
    },[])


    const MyOrderList = useSelector(selectMyOrderList);



    return (
        <>
          <Container class1="card-wrapper storeBackground py-5">
              <div className="row">
                  <div className="col-12">

                      {MyOrderList.length === 0 && (
                          <>
                              <div className="text-center p-4 fs-3">There is no Orders</div>
                          </>
                      )}

                      {MyOrderList.length !== 0 && (
                          <>
                              <div className="row">
                                  <div className="col-3">
                                      <h5>Order Id</h5>
                                  </div>
                                  <div className="col-3">
                                      <h5>Total Amount</h5>
                                  </div>
                                  <div className="col-3">
                                      <h5>Order Status</h5>
                                  </div>
                              </div>
                          </>
                      )}

                  </div>


                  <div className="col-12 mt-3">

                      {
                          MyOrderList && MyOrderList?.map((item,i)=>{
                              return(
                                  <>
                                      <div style={{background: "#febd69"}} className="row pt-3 my-3" key={i.toString()}>
                                          <div className="col-3">
                                              <p>{item._id}</p>
                                          </div>
                                          <div className="col-3">
                                              <p>{item?.totalPrice}</p>
                                          </div>
                                          <div className="col-3">
                                              <p>{item?.orderStatus}</p>
                                          </div>
                                          <div className="col-12">
                                              <div style={{background: "#232f3e"}} className="row py-3">
                                                  <div className="col-3">
                                                      <h6 className="text-white">Product Name</h6>
                                                  </div>
                                                  <div className="col-3">
                                                      <h6 className="text-white">Quantity</h6>
                                                  </div>
                                                  <div className="col-3">
                                                      <h6 className="text-white">Price</h6>
                                                  </div>
                                                  <div className="col-3">
                                                      <h6 className="text-white">Color</h6>
                                                  </div>
                                              </div>
                                          </div>
                                          {
                                              item?.orderItems && item?.orderItems?.map((product,i2)=> {
                                                  return(
                                                      <>
                                                          <div key={i2.toString()} className="col-12">
                                                              <div style={{background: "#232f3e"}} className="row py-3">
                                                                  <div className="col-3">
                                                                      <p className="text-white">{product.ProductName}</p>
                                                                  </div>
                                                                  <div className="col-3">
                                                                      <p className="text-white">{product.quantity}</p>
                                                                  </div>

                                                                  <div className="col-3">
                                                                      <p className="text-white">{product.price}</p>
                                                                  </div>
                                                                  <div className="col-3">
                                                                      <ul className="colors ps-0">
                                                                          <li style={{background: product.ColorName}}></li>
                                                                      </ul>
                                                                  </div>
                                                              </div>
                                                          </div>

                                                      </>
                                                  )
                                              })
                                          }

                                      </div>
                                  </>
                              )
                          })
                      }
                  </div>
              </div>
          </Container>
        </>
    );
};

export default Orders;