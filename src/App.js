import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import CharactersContainer from './characters/CharactersContainer'
import Home from './Home'
import About from './About'
import NavBar from './NavBar'

class App extends Component {

    render() {
        return (
            <>  
                <NavBar />

            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <CharactersContainer />
            </Switch>
            </>
            
        );
    }
}


export default App;


// create routes: /about, / => home, /characters => index 


//Route component or render 
//render prop if you want pass props to component 


// navigation system: Link or NavLink component => a tag 

//NavLink => activeStyle, active

// show page => '/characters/:charId'

// make character card clickable => show page