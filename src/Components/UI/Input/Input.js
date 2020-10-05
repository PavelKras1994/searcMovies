import React from 'react';

import './Input.scss';
import PT from 'prop-types';

const Input = ({
    type='text',
    name,
    placeholder,
    value,
    onChange
}) => {
    return (
        <input className="input"
            type = {type}
            name = {name}
            placeholder = {placeholder}
            value = {value}
            onChange = {onChange}
        />
    );
};

Input.propTypes = {
    type: PT.oneOf(['text', 'password', 'number']),
    name: PT.string,
    placeholder: PT.string,
    value: PT.string.isRequired,
    onChange: PT.func.isRequired
};

export default Input;
