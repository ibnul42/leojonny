import React from 'react';
import { Helmet } from "react-helmet";

const PageHeader = ({ title }) => {
    return (
        <div className="">
            <Helmet>
                <meta charSet="utf-8" />
                <title className='capitalize'>{title} - LeoJonny</title>
                <link rel="canonical" href={`http://mysite.com/${title}`} />
            </Helmet>
        </div>
    )
}

export default PageHeader