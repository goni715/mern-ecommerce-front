import React, {Fragment, useEffect} from 'react';
import './Store.css';
import Categories from "./Categories";
import Filter from "./Filter";
import ProductTag from "./ProductTag";
import SortGrid from "./SortGrid";
import Container from "../Container/Container";
import {FilterProductsRequest} from "../../ApiServices/ProductApiRequest";
import {useSelector} from "react-redux";
import {
    selectEmpty,
    selectFilterCategory,
    selectFilterDate,
    selectFilterLetter,
    selectFilterPrice, selectFilterProducts, selectFromPrice,
    selectSearchValue, selectToPrice
} from "../../redux/state-slice/filterSlice";
import Brands from "./Brands";



const OurStore = () => {

    const search = useSelector(selectSearchValue);
    const letter = useSelector(selectFilterLetter);
    const price = useSelector(selectFilterPrice);
    const date = useSelector(selectFilterDate);
    const category = useSelector(selectFilterCategory);
    const fromPrice = useSelector(selectFromPrice);
    const toPrice = useSelector(selectToPrice);
    const empty = useSelector(selectEmpty);


    useEffect(()=>{
        (async () => {
            await FilterProductsRequest(search,letter,price,date,category,fromPrice,toPrice,empty);
        })();
    },[])


    let FilterProducts = useSelector(selectFilterProducts);



    return (
        <Fragment>
            <Container class1="store-wrapper storeBackground py-5">
                    <div className="row">
                        <div className="col-3">
                           <Categories />
                            <Filter />
                            <ProductTag />
                            <Brands/>
                        </div>

                        <div className="col-9">
                            <SortGrid products={FilterProducts}/>
                        </div>
                    </div>
            </Container>
        </Fragment>
    );
};

export default OurStore;