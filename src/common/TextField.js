import React from 'react';

const TextField = ({ type, value, handleOnChange }) => {
    return (
        <input 
            type={type}
            value={value}
            onChange={handleOnChange}
        />
    );
};

export default TextField;