import React, {Fragment} from 'react';
import {useSelector} from "react-redux";
import {selectLoader} from "../../redux/state-slice/settingsSlice";
import LoaderSVG from '../../assets/images/Loader5.svg'

const FullscreenLoader = () => {
    const Loader = useSelector(selectLoader);
    return (
        <Fragment>

            <div className={Loader+" LoadingOverlay"}>
                <div className="LoadingContainer">
                    <div className="imageContainer">
                        <img src={LoaderSVG} className="LoaderIMG" alt="logo" />
                    </div>
                </div>
            </div>

        </Fragment>
    );
};
export default FullscreenLoader;