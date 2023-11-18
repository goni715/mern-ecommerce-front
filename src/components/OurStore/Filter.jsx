import React, {Fragment, useRef,} from 'react';
import './Store.css';
import {FilterProductsRequest,} from "../../ApiServices/ProductApiRequest";
import {BsSearch} from "react-icons/bs";
import {ErrorToast} from "../../helper/ValidationHelper";

const Filter = () => {


    let fromPriceRef, toPriceRef =useRef()




    const handleClick = async () => {

        let fromPrice = fromPriceRef.value;
        let toPrice = toPriceRef.value;

        if(fromPrice < 1){
            ErrorToast("Provide a From Price");
        }
        else if(toPrice < 1){
            ErrorToast("Provide a To Price");
        }
        else{
            let result = await FilterProductsRequest(0,0,0,0,0,fromPrice,toPrice,0);
            if(result === true){
               document.getElementById("floatingInput").value=null;
               document.getElementById("floatingInput2").value=null;
            }
        }
    }




    return (
        <Fragment>
            <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By Price</h3>
                <div>
                    <div className="d-flex align-items-center gap-10">
                        <div className="form-floating">
                            <input ref={(input)=>fromPriceRef=input}  type="number" className="form-control" id="floatingInput" placeholder="From" />
                            <label htmlFor="floatingInput">From</label>
                        </div>
                        <div className="form-floating">
                            <input ref={(input)=>toPriceRef=input} type="number" className="form-control" id="floatingInput2" placeholder="To" />
                            <label htmlFor="floatingInput2">To</label>
                        </div>
                        <div>
                            <button onClick={handleClick} className="btn btn-secondary"><BsSearch className="fs-4 text-white"/></button>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );
};

export default Filter;