import React from 'react';

import { useParams } from 'react-router-dom'

const CharacterShow = ({ chars }) => {

    const { charId } = useParams()

    console.log(charId)

    // get params id from match 

    // find the matching character from my characters array 

    //find => first match
    //filter => an array of whatever matches

    const character = chars.find(char => char.char_id === parseInt(charId))


    return (
        <div>
            {character.name} - {character.birthday} - {character.nickname}
        </div>
    );
};

export default CharacterShow;