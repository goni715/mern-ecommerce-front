import React, {useEffect} from 'react';
import Container from "../Container/Container";
import {PaymentSuccessAlert} from "../../helper/PaymentSuccessAlert";
import {DeleteUserCartRequest} from "../../ApiServices/CartApiRequest";

const PaymentSuccess = ({tranId}) => {


    useEffect(()=>{
       //Delete User Cart
            (async () => {
                await PaymentSuccessAlert();
                await DeleteUserCartRequest();
            })();
    },[tranId])





    return (
        <>
            <Container class1="policy-wrapper storeBackground py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="policy" style={{paddingLeft: "420px"}}>
                            <h1>Payment Successful</h1>
                            <h3>Transaction ID: {tranId}</h3>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    );
};

export default PaymentSuccess;