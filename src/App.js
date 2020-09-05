import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import About from './About'
import Welcome from './Welcome';
import CharacterPage from './character/CharacterPage';
import Nav from './NavBar'

class App extends Component {

    render() {
        
        return (
            
            <>

                <Nav />

                <Route exact path="/" component={Welcome} />
                <Route exact path='/about' component={About} />
                <Route exact path='/characters' component={CharacterPage} />
                        
            </>
        );
    }
}

export default App;
