import React from 'react';

import CharacterCard from './CharacterCard';

const CharactersList = ({ chars, onClick }) => {

    return (

        <div>
            { chars.map(char => 
                < CharacterCard 
                    key={char.char_id} 
                    char={char} 
                    onClick={onClick}
                />
            ) }
        </div>
        
    );
};

export default CharactersList;