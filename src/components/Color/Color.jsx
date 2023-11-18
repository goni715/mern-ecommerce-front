import React from 'react';
import store from "../../redux/store/store";
import {SetCartProductColor} from "../../redux/state-slice/cartSlice";

const Color = ({colors}) => {


    const ClickHandle = (id) => {
        store.dispatch(SetCartProductColor(id));
    }


    return (
        <>

            <div>
                <div>
                    <ul className="colors ps-0">
                        {
                            colors.map((item,i)=>{
                                return(
                                    <>
                                        <li key={i.toString()} onClick={ClickHandle.bind(this, item._id)} style={{background: item.ColorName}}> </li>
                                    </>
                                )
                            })


                        }

                    </ul>
                </div>
            </div>
        </>
    );
};

export default Color;