import React, { Component } from 'react';

import SearchForm from '../SearchForm'
import CharactersList from './CharactersList'

class Characters extends Component {

    constructor() {
        super()

        this.state = {
            chars: [],
            query: ''
        }
    }

    fetchAllCharacters = () => {
        fetch('https://www.breakingbadapi.com/api/characters')
        .then(resp => resp.json())
        .then(chars => this.setState({
           chars
        }))
    }

    componentDidMount(){
        this.fetchAllCharacters()
    }

    onClick = (e) => {
        const char = e.target.parentElement.textContent
        fetch(`https://www.breakingbadapi.com/api/characters?name=${char}`)
        .then(resp => resp.json())
        .then(chars => this.setState({
            chars
        }))
    }

    handleOnChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    submitSearchForm = (e) => {
        e.preventDefault()
        fetch(`https://www.breakingbadapi.com/api/characters?name=${this.state.query}`)
        .then(resp => resp.json())
        .then(chars => this.setState({
            chars: chars,
            query: ''
        }))
    }

    fixPic = () => {
        this.state.chars.map(char => (
            char.name === "Jesse Pinkman" || char.name === "Henry Schrader" ? char.img = 'https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png' : char
        ))
    }

    render() {
        return (
            <>
                {this.fixPic()}

                <SearchForm  
                    onSubmit={this.submitSearchForm} 
                    state={this.state} 
                    handleOnChange={this.handleOnChange}
                />

                <CharactersList chars={this.state.chars} onClick={this.onClick}/>

                
            </>

        );
    }
}

export default Characters;


