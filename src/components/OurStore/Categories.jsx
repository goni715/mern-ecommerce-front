import React, {useEffect} from 'react';
import {ProductCategoryListRequest} from "../../ApiServices/ProductCategoryApiRequest";
import {useSelector} from "react-redux";
import {selectProductCategoryList} from "../../redux/state-slice/productCategorySlice";
import {ProductListRequest} from "../../ApiServices/ProductApiRequest";
import {selectProductList} from "../../redux/state-slice/productSlice";
import store from "../../redux/store/store";
import {SetFilterProducts} from "../../redux/state-slice/filterSlice";

const Categories = () => {


    useEffect(()=>{
        (async () => {
            await ProductCategoryListRequest();
            await ProductListRequest();
        })();
    },[])


    let ProductCategoryList=useSelector(selectProductCategoryList);
    let ProductList = useSelector(selectProductList);


    const handleClick =async (categoryName) => {
        let result = ProductCategoryList.find((currentValue)=>currentValue.CategoryName === categoryName);
        let categoryId = result._id;
        let products = ProductList.filter((currentValue)=>currentValue.CategoryID.toString() === categoryId.toString());
        store.dispatch(SetFilterProducts(products));

    }



    return (
        <>
            <div className="filter-card category-card mb-3">
                    <h3 className="filter-title">Shop By Categories</h3>
                    <div>
                       <ul className="ps-0 ">
                            {
                                ProductCategoryList && ProductCategoryList?.map((item,i)=>{
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


        </>
    );
};

export default Categories;