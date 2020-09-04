import React from 'react';

import CharacterCard from './CharacterCard';

const CharactersList = (props) => {

    const { chars, onClick } = props

    return (
        <div>
            {chars.map(char => <CharacterCard char={char} onClick={onClick}/>)}
        </div>
    );
};

export default CharactersList;