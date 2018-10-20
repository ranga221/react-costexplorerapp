import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import LoginPage from '../components/Loginpage';
import AddExpenseDashboardPage from './../components/create';
import ExpenseDashboardPage from './../components/home';
import NotFoundPage from './../components/notfoundpage';
import helpExpenseDashboardPage from './../components/help';
import EditExpenseDashboardPage from './../components/edit';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const Approuter = () => (

    <Router history={history} > 
    <div>
    <Switch>
    <Route path="/home" component={LoginPage} exact={true} />
    <PrivateRoute path="/dash" component={ExpenseDashboardPage} exact={true} />
    <PrivateRoute path="/create" component={AddExpenseDashboardPage} />
    <PrivateRoute path="/edit/:id" component={EditExpenseDashboardPage} />
    <Route path="/help" component={helpExpenseDashboardPage} />
    <Route  component={NotFoundPage} />
    </Switch>
    </div>
    </Router>
)




export default Approuter;