import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap'

const Nav = () => {

    return (
        <Navbar>
        <NavLink
        to="/"
        exact
        activeStyle={{color: 'blue', fontWeight: 'bold'}} 
        activeClassName="selectedLink"
    > 
         Home 
    </NavLink> | 

    <NavLink
        to="/about"
        exact
        activeStyle={{color: 'blue', fontWeight: 'bold'}} 
    > 
        About 
    </NavLink> | 

    <NavLink
        to="/characters"
        exact
        activeStyle={{color: 'blue', fontWeight: 'bold'}} 
    > 
        Characters 
    </NavLink> | 

    </Navbar>


    );
};

export default Nav;

