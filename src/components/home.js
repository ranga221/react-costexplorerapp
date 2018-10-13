import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseList from './ExpenseList';

const ExpenseDashboardPage = () => (
    <div>
    <ExpenseList />
    <ExpenseListFilters />
    This is from my dashboard components
    </div>
);

export default ExpenseDashboardPage;