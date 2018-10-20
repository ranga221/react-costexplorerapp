import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { startLogout } from '../actions/auth';


export const Header = ({startLogout}) => (
    <header className="header">
    <div className="content-container"> 
    <div className="header__content"> 
    <Link className = "header__title" to="/dash"> 
    <h1>Cost Explorer</h1>
    </Link>
    <NavLink to="/help"  className = "header__title"  activeClassName="is-active"> Help Page</NavLink>
    <button onClick={ startLogout }>Log Out</button>
    </div>
    </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
