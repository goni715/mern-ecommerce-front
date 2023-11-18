import React, {useEffect} from 'react';
import './Cart.css'
import {AiFillDelete} from "react-icons/ai";
import {Link} from "react-router-dom";
import Container from "../Container/Container";
import {useSelector} from "react-redux";
import {selectCartList, selectTotalAmount, SetTotalAmount} from "../../redux/state-slice/cartSlice";
import {
    CartListRequest,
    RemoveProductFromCartRequest,
    UpdateProductQuantityFromCartRequest
} from "../../ApiServices/CartApiRequest";
import store from "../../redux/store/store";


const Cart = () => {



    useEffect(()=>{
        (async () => {
            await CartListRequest();
        })();
    },[])



    const CartList = useSelector(selectCartList);




    useEffect(()=>{
        let sum =0;
        for(let i=0; i < CartList.length; i++){
            sum = Number(sum)+(Number(CartList[i].quantity) * Number(CartList[i]['ProductDetails'][0]['price']));
            store.dispatch(SetTotalAmount(sum));
        }
    },[CartList]);



    //Delete Cart Product
    const CartProductRemove = async (id) => {
      let result = await RemoveProductFromCartRequest(id);
      if(result === true){
         let cartList = await CartListRequest(); //This is Array
          if(cartList.length ===0){
              store.dispatch(SetTotalAmount(""));
          }
      }
    }




    const HandleChange = async (quantity,id) => {
        let result = await UpdateProductQuantityFromCartRequest(quantity,id);
        if(result === true){
          let cartList = await CartListRequest();
            let total =0;
            for(let i=0; i < cartList.length; i++){
                total = Number(total)+(Number(cartList[i].quantity) * Number(cartList[i]['ProductDetails'][0]['price']));
                store.dispatch(SetTotalAmount(total));
            }
        }
    }






    const TotalAmount = useSelector(selectTotalAmount);








    return (
        <>
            <Container className="cart-wrapper storeBackground py-5">
                    <div className="row">
                        <div className="col-12">

                            {CartList.length === 0 && (
                                <>
                                    <div className="text-center p-4 fs-3">There is no Cart's Product</div>
                                </>
                            )}

                            {CartList.length !== 0 && (
                                <>
                                    <div
                                        className="cart-header py-3 d-flex justify-content-between align-items-center">
                                        <h4 className="cart-col-1">Product</h4>
                                        <h4 className="cart-col-2">Price</h4>
                                        <h4 className="cart-col-3">Quantity</h4>
                                        <h4 className="cart-col-4">Total</h4>
                                    </div>
                                </>
                            )}

                            {
                                CartList.map((item,i)=>{
                                    return(
                                        <>
                                            <div key={i.toString()} className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                                    <div className="w-25">
                                                        {/*<img src={WatchPic2} className="img-fluid" alt=""/>*/}
                                                        <img src={item['ProductDetails'][0]['images'][0]['image_url']} className="img-fluid" alt=""/>
                                                    </div>
                                                    <div className="w-75">
                                                        <p>{item['ProductDetails'][0]['ProductName']}</p>
                                                        <p>Size: S</p>
                                                        <p className="d-flex gap-2">Color:
                                                            <ul className="colors ps-0">
                                                                <li style={{background: item['Colors'][0]['ColorName']}}></li>
                                                            </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="cart-col-2">
                                                    <h5  className="price">${item['ProductDetails'][0]['price']}</h5>
                                                </div>
                                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                                    <div>
                                                        <input onChange={(e)=>HandleChange(e.target.value, item._id)} defaultValue={item.quantity} className="form-control" type="number" min={1} max={10} name="" id=""/>
                                                    </div>
                                                    <div className="p-1 bg-danger" style={{borderRadius:"50%"}}>
                                                        <AiFillDelete onClick={CartProductRemove.bind(this, item._id)} className="text-white fs-4"/>
                                                    </div>
                                                </div>
                                                <div className="cart-col-4">
                                                    <h5 className="price">${item.quantity * item['ProductDetails'][0]['price']}</h5>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }



                        </div>
                        <div className="col-12 py-2 mt-4">
                            <div className="d-flex justify-content-between align-items-baseline">
                                    <Link to="/store" className="button">Continue To Shopping</Link>

                                {
                                    TotalAmount !=="" &&(
                                        <>
                                            <div className="d-flex flex-column align-items-end">
                                                <h4>SubTotal: ${TotalAmount}</h4>
                                                <p>Taxes and shipping calculated at checkout</p>
                                                <Link to="/checkout" className="button">Checkout</Link>
                                            </div></>
                                    )
                                }


                            </div>
                        </div>
                    </div>
            </Container>
        </>
    );
};

export default Cart;