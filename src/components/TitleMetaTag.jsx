import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";

const TitleMetaTag = ({title}) => {
    return (
        <Fragment>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
            </Helmet>
        </Fragment>
    );
};

export default TitleMetaTag;