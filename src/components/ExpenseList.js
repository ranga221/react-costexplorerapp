import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
<div className="content-container">
<div className="list-header">
<div>Expense</div>
<div>Amount</div>
</div>

{props.expenses.map((expense)=> {

return <ExpenseListItem key={expense.id}{...expense} />
})}


</div>
);

const mapStateToProps = (state) => {
return{
    expenses: selectExpenses(state.expenses,state.filters)
};
};

export default connect(mapStateToProps)(ExpenseList);