import React, {Fragment, useEffect} from 'react';
import './Store.css';
import {ProductListRequest} from "../../ApiServices/ProductApiRequest";
import {useSelector} from "react-redux";
import {SetFilterProducts} from "../../redux/state-slice/filterSlice";
import store from "../../redux/store/store";
import {selectProductList} from "../../redux/state-slice/productSlice";


const ProductTag = () => {

    const Tags = ["Featured", "Special", "Popular"];


    useEffect(()=>{
        (async () => {
            await ProductListRequest();
        })();
    },[])


    let ProductList = useSelector(selectProductList);

    const handleClick = (Tag) => {
        let result = ProductList.filter((currentValue)=>currentValue.tags === Tag);
        store.dispatch(SetFilterProducts(result));
    }




    return (
        <Fragment>

            <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By Tags</h3>
                <div>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                        {
                            Tags?.map((item,i)=>{
                                return(
                                    <>
                                        <span key={i.toString()} onClick={handleClick.bind(this, item)} className="tag text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3">{item}</span>
                                    </>
                                )
                            })
                        }


                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductTag;