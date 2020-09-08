import React from 'react';

import CharacterForm from './CharacterForm'
import CharacterCard from './CharacterCard'

const CharactersIndex = ({ submitSearchForm, state, handleOnChange}) => {

    return (
        <>

            <CharacterForm  
                onSubmit={submitSearchForm} 
                state={state} 
                handleOnChange={handleOnChange}
            />


            {state.chars.map(char => <CharacterCard key={char.char_id} char={char}/>)}

            
        </>
    );
};

export default CharactersIndex;