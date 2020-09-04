import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'

import About from './About'
import Welcome from './Welcome';

class App extends Component {

    render() {
        return (
            <>
                    <NavLink
                        to="/"
                        exact
                        activeStyle={{color: 'black'}} 
                    > 
                         Home 
                    </NavLink> | 

                    <NavLink
                        to="/about"
                        exact
                        activeStyle={{color: 'black'}} 
                    > 
                        About 
                    </NavLink> | 

                    <Route exact path="/" component={Welcome} />
                    <Route path='/about' component={About} />
                        
            </>
        );
    }
}

export default App;