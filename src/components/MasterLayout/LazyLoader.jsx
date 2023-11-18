import React from 'react';
import LoaderSVG from "../../assets/images/Loader.svg";
const LazyLoader = () => {
    return (
        <div className="LoadingOverlay">
            <div className="LoadingContainer">
                <div className="imageContainer">
                    <img src={LoaderSVG} className="LoaderIMG" alt="logo" />
                </div>
            </div>
        </div>
    );
};
export default LazyLoader;