import React from 'react';

import TextField from './common/TextField'

const SearchForm = (props) => {

    return (

        <form onSubmit={props.onSubmit}>
            
            <TextField 
                type="text" 
                value={props.state.query} 
                handleOnChange={props.handleOnChange}
            />
        
            <TextField 
                type="submit"
                value="Search"
            />

    </form>
    );
};

export default SearchForm;