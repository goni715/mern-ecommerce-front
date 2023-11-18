import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {ProductListRequest} from "../../ApiServices/ProductApiRequest";
import {BrandListRequest} from "../../ApiServices/BrandApiRequest";
import {selectBrandList} from "../../redux/state-slice/brandSlice";
import store from "../../redux/store/store";
import {SetFilterProducts} from "../../redux/state-slice/filterSlice";
import {selectProductList} from "../../redux/state-slice/productSlice";

const Brands = () => {

        useEffect(()=>{
            (async () => {
                await BrandListRequest();
                await ProductListRequest();
            })();
        },[])

        let BrandList=useSelector(selectBrandList);
        let ProductList = useSelector(selectProductList);



        const handleClick =async (brandName) => {
              let result = BrandList.find((currentValue)=>currentValue.BrandName === brandName);
              let brandId = result._id;
              let products = ProductList.filter((currentValue)=>currentValue.BrandID.toString() === brandId.toString());
              store.dispatch(SetFilterProducts(products));
          }



    return (
        <>
            <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By Brand</h3>
                <div>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                        {
                            BrandList &&  BrandList?.map((item,i)=>{
                                return(
                                    <>
                                        <span key={i.toString()} onClick={handleClick.bind(this, item.BrandName)} className="tag text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3">{item.BrandName}</span>
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

export default Brands;