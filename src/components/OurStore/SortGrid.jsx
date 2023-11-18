import React, {Fragment, useState} from 'react';
import gr1 from "../../assets/images/gr.svg";
import gr3 from "../../assets/images/gr3.svg";
import gr2 from "../../assets/images/gr2.svg";
import gr4 from "../../assets/images/gr4.svg";
import ProductCard from "../ProductCard/ProductCard";
import {FilterProductsRequest} from "../../ApiServices/ProductApiRequest";

const SortGrid = ({products}) => {

    const [grid, setGrid] = useState(4);

    const handleChange = async (value) => {

        if(value ==="product-name-ascending"){//1
            await FilterProductsRequest(0,1,0,0,0,0,0,0);
        }
        else if(value ==="product-name-descending"){//-1
            await FilterProductsRequest(0,-1,0,0,0,0,0,0);
        }
        else if(value ==="price-ascending"){//1
            await FilterProductsRequest(0,0,1,0,0,0,0,0);
        }
        else if(value ==="price-descending"){//-1
            await FilterProductsRequest(0,0,-1,0,0,0,0,0);
        }
        else if(value ==="created-ascending"){//1
            await FilterProductsRequest(0,0,0,1,0,0,0,0);
        }
        else if(value ==="created-descending"){//-1
            await FilterProductsRequest(0,0,0,-1,0,0,0,0);
        }
    }




    return (
        <Fragment>
            <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-10">
                        <p className="mb-0 d-block" style={{width: "100px"}}>Sort By:</p>
                        <select onChange={(e)=>handleChange(e.target.value)} name="" className="form-control form-select" id="">
                            <option value="product-name-ascending">Alphabetically, A-Z</option>
                            <option value="product-name-descending">Alphabetically, Z-A</option>
                            <option value="price-ascending">Price, low to high</option>
                            <option value="price-descending">Price, high to low</option>
                            <option value="created-ascending">Date, old to new</option>
                            <option value="created-descending">Date, new to old</option>
                        </select>
                    </div>
                    <div className="d-flex align-items-center gap-10">
                        <p className="mb-0 totalProducts">{products?.length} Products</p>
                        <div className="d-flex gap-10 align-items-center grid">
                            <img onClick={()=>{setGrid(3)}} src={gr4} className="img-fluid" alt="grid logo"/>
                            <img onClick={()=>{setGrid(4)}} src={gr3} className="img-fluid" alt="grid logo"/>
                            <img onClick={()=>{setGrid(6)}} src={gr2} className="img-fluid" alt="grid logo"/>
                            <img onClick={()=>{setGrid(12)}} src={gr1} className="img-fluid" alt="grid logo"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="products-list pb-5">
                <div className="d-flex flex-wrap gap-10">
                    <ProductCard grid={grid} ProductList={products}/>
                </div>
            </div>
        </Fragment>
    );
};

export default SortGrid;