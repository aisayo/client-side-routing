import React from 'react';


import TextField from './common/TextField'

const SearchForm = ( {onSubmit, state, handleOnChange} ) => {

    return (

        <form onSubmit={onSubmit} style={formStyle}>
            
            <TextField 
                type="text" 
                value={state.query} 
                handleOnChange={handleOnChange}
            />
        
            <TextField 
                type="submit"
                value="Search"
            />

    </form>
    );
};

export default SearchForm;

const formStyle = {
    display: 'block',
    alignItems:'center', 
    justifyContent:'center'
}