import React from 'react';
import PT from 'prop-types';

import './Button.scss';

const Button = ({
    type ="button",
    children,
    onClick,
    isDisabled
}) => {
    return (
        <button className="button"
        disabled = {isDisabled}
        type={type}
        onClick={onClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PT.oneOf(['submit', 'button']),
    children: PT.string.isRequired,
    onclick: PT.func

};
export default Button;

