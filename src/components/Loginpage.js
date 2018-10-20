import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => (
    <div className="box-layout">
    <div className="box-layout__box"> 
    <h1 className="box-layout__title">Cost Explorer </h1>
    <p>Manage Your Expenses.</p>
    <button className="button-layout__box" onClick={startLogin}>Login</button>
    </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);