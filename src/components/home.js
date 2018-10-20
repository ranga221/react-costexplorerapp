import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseList from './ExpenseList';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />

    This is from my dashboard components
    </div>
);

export default ExpenseDashboardPage;