import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'

import About from './About'
import Welcome from './Welcome';
import Characters from './character/Characters';

class App extends Component {

    render() {
        
        return (
            
            <>

                    <NavLink
                        to="/"
                        exact
                        activeStyle={{color: 'blue'}} 
                        activeClassName="selectedLink"
                    > 
                         Home 
                    </NavLink> | 

                    <NavLink
                        to="/about"
                        exact
                        activeStyle={{color: 'blue'}} 
                    > 
                        About 
                    </NavLink> | 

                    <NavLink
                        to="/characters"
                        exact
                        activeStyle={{color: 'blue'}} 
                    > 
                        Characters 
                    </NavLink> | 

                    <Route exact path="/" component={Welcome} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/characters' component={Characters} />
                        
            </>
        );
    }
}

export default App;
