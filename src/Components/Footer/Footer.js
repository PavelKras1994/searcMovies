import React from 'react';

import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
           <h2 className="footer__title">
                All rights reserved, {new Date().getFullYear()} 
                </h2>
        </div>
    );
};

export default Footer;
