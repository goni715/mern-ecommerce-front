import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import Container from "./Container/Container";


const BreadCrumb = ({title}) => {
    return (
        <Fragment>
            <Container className="breadcrumb mb-0 p-5">
                    <div className="row">
                        <div className="col-12 p-4">
                            <p className="text-center mb-0">
                                <Link to="/" className="text-dark">Home / {title} </Link>
                            </p>
                        </div>
                    </div>
            </Container>
        </Fragment>
    );
};

export default BreadCrumb;