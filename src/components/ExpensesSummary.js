import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectTotalExpenses from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
const formatedExpenses = numeral(expensesTotal / 100 ).format('$0,0.00')

    return (
    <div>
    <h1>View {expenseCount} {expenseWord} {formatedExpenses}</h1>
    </div>
);
};


const mapStateToProps = (state) => {
//const visibleExpenses = selectExpenses(state.expenses, state.filters);

//return {
    //expenseCount: visibleExpenses.length,
    //expensesTotal: selectExpenses(visibleExpenses)
//};
};

export default connect()(ExpensesSummary);