import React, {useEffect} from 'react';
import Container from "../Container/Container";
import {PaymentFailAlert} from "../../helper/PaymentFailAlert";

const PaymentFail = ({tranId}) => {




    useEffect(()=>{

        //Delete User Cart
        (async () => {

            await PaymentFailAlert();
        })();


    },[tranId])




    return (
        <>
            <Container class1="policy-wrapper storeBackground py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="policy" style={{paddingLeft: "420px"}}>
                            <h1>Payment Failed</h1>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    );
};

export default PaymentFail;