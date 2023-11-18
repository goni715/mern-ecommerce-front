import React, {Fragment} from 'react';
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import StorePage from "../pages/StorePage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import CompareProductPage from "../pages/CompareProductPage";
import WishlistPage from "../pages/WishlistPage";
import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import SignUpPage from "../pages/SignUpPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import SingleBlogPage from "../pages/SingleBlogPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import RefundPolicyPage from "../pages/RefundPolicyPage";
import ShippingPolicyPage from "../pages/ShippingPolicyPage";
import TermAndConditionsPage from "../pages/TermAndConditionsPage";
import SingleProductPage from "../pages/SingleProductPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import FullscreenLoader from "../components/MasterLayout/FullscreenLoader";
import SignUpVerifyOtpPage from "../pages/SignUpVerifyOtpPage";
import {getToken} from "../helper/SessionHelper";
import PaymentSuccessPage from "../pages/PaymentSuccessPage";
import PaymentFailPage from "../pages/PaymentFailPage";
import OrdersPage from "../pages/OrdersPage";
import ProfilePage from "../pages/ProfilePage";
import EditProfilePage from "../pages/EditProfilePage";

const AppRoute = () => {
    

    if(getToken()){

        return (
            <Fragment>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/store" element={<StorePage/>} />
                        <Route path="/blog" element={<BlogPage/>} />
                        <Route path="/single-blog/:id" element={<SingleBlogPage/>} />
                        <Route path="/contact" element={<ContactPage/>} />
                        <Route path="/compare-product" element={<CompareProductPage/>} />
                        <Route path="/wishlist" element={<WishlistPage/>} />
                        <Route path="/privacy-policy" element={<PrivacyPolicyPage/>} />
                        <Route path="/refund-policy" element={<RefundPolicyPage/>} />
                        <Route path="/shipping-policy" element={<ShippingPolicyPage/>} />
                        <Route path="/term-conditions" element={<TermAndConditionsPage/>} />
                        <Route path="/single-product/:id" element={<SingleProductPage/>} />
                        <Route path="/cart" element={<CartPage/>} />
                        <Route path="/checkout" element={<CheckoutPage/>} />
                        <Route path="/payment/success/:tranId" element={<PaymentSuccessPage/>} />
                        <Route path="/payment/fail/:tranId" element={<PaymentFailPage/>} />
                        <Route path="/my-orders" element={<OrdersPage />} />
                        <Route path="/my-profile" element={<ProfilePage />} />
                        <Route path="/edit-profile" element={<EditProfilePage />} />

                        <Route path="/signup" element={<Navigate to="/" replace />} />
                        <Route path="/signup-verify-otp" element={<Navigate to="/" replace />} />
                        <Route path="/reset-password/:email/:token" element={<Navigate to="/" replace />} />
                    </Routes>
                </HashRouter>
                <FullscreenLoader/>
            </Fragment>
        );
    }else{


        return (
            <Fragment>
                <HashRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/login" element={<LoginPage/>} />
                        <Route path="/cart" element={<Navigate to="/login" replace />} />
                        <Route path="/wishlist" element={<Navigate to="/login" replace />} />
                        <Route path="/compare-product" element={<Navigate to="/login" replace />} />
                        <Route path="/store" element={<StorePage/>} />
                        <Route path="/blog" element={<BlogPage/>} />
                        <Route path="/single-blog/:id" element={<SingleBlogPage/>} />
                        <Route path="/contact" element={<ContactPage/>} />
                        <Route path="/forgot-password" element={<ForgotPasswordPage/>} />
                        <Route path="/signup" element={<SignUpPage/>} />
                        <Route path="/signup-verify-otp" element={<SignUpVerifyOtpPage/>} />
                        <Route path="/reset-password/:email/:token" element={<ResetPasswordPage/>} />
                        <Route path="/privacy-policy" element={<PrivacyPolicyPage/>} />
                        <Route path="/refund-policy" element={<RefundPolicyPage/>} />
                        <Route path="/shipping-policy" element={<ShippingPolicyPage/>} />
                        <Route path="/term-conditions" element={<TermAndConditionsPage/>} />
                        <Route path="/single-product/:id" element={<SingleProductPage/>} />
                    </Routes>
                </HashRouter>
                <FullscreenLoader/>
            </Fragment>
        );


    }






};

export default AppRoute;