import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
    <h1>Cost Explorer</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}> Home </NavLink>
    <NavLink to="/create" activeClassName="is-active"> Create New</NavLink>
    <NavLink to="/edit"  activeClassName="is-active"> Edit Existing</NavLink>
    <NavLink to="/help"  activeClassName="is-active"> Help Page</NavLink>
    </header>
);

export default Header;
