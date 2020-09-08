import React from 'react';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


// import CharacterCard from './CharacterCard';

const CharactersIndex = ({ chars }) => {

    console.log("chars", chars)
    
    return (

        <div>
            { chars.map(char => 
                <Link key={char.char_id} to={`/characters/${char.char_id}`}>
                    < Card style={cardStyle}>
                        <Card.Body>
                            <Card.Img src={char.img} style={imageStyle} alt={char.name}/>
                            <Card.Title>{char.name}</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            ) }
        </div>
        
    );
};

export default CharactersIndex;

const cardStyle = {
    border: 'solid',
    marginBottom: 25,
    marginTop: 25,
    marginLeft: 25,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
    paddingTop: 25,
    height: 250,
    width: 250,
    display: 'inline-block',
    textAlign: 'center'
}

const imageStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
    height: 200,
    marginBottom: 10
}