import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import AddExpenseDashboardPage from './../components/create';
import ExpenseDashboardPage from './../components/home';
import Header from './../components/header';
import NotFoundPage from './../components/notfoundpage';
import helpExpenseDashboardPage from './../components/help';
import EditExpenseDashboardPage from './../components/edit';


const Approuter = () => (

    <BrowserRouter> 
    <div>
    <Header /> 
    <Switch>
    <Route path="/" component={ExpenseDashboardPage} exact={true} />
    <Route path="/create" component={AddExpenseDashboardPage} />
    <Route path="/edit/:id" component={EditExpenseDashboardPage} />
    <Route path="/help" component={helpExpenseDashboardPage} />
    <Route  component={NotFoundPage} />
    </Switch>
    </div>
    </BrowserRouter>
)




export default Approuter;