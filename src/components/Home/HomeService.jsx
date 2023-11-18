import React, {Fragment} from 'react';
import './Home.css';
import {ServiceData} from "../../data/Data";
import Container from "../Container/Container";

const HomeService = () => {
    return (
        <Fragment>
            <Container class1="home-service py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-between">

                            {
                                ServiceData.map((item,i)=>{
                                    return(
                                        <div className="d-flex align-items-center gap-15">
                                            <img src={item.image} alt="services"/>
                                            <div>
                                                <h6>{item.title}</h6>
                                                <p className="mb-0">{item.tagline}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
            </Container>
        </Fragment>
    );
};

export default HomeService;