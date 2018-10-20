import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectTotalExpenses from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses';
import { Link } from 'react-router-dom';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
const formatedExpenses = numeral(expensesTotal / 100 ).format('$0,0.00')

    return (
    <div className="page-header">
    <div className="content-container">
    <h1 className="page-header__title">View <span> {expenseCount} </span> {expenseWord} <span>{formatedExpenses}</span></h1>
   <div className="page-header__actions">
   <Link className="button" to="/create"> Add Your Daily Costs</Link>
   </div>
    </div>
    </div>
);
};


const mapStateToProps = (state) => {
const visibleExpenses = selectExpenses(state.expenses, state.filters);

return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectTotalExpenses(visibleExpenses)
};
};

export default connect(mapStateToProps)(ExpensesSummary);