import React from 'react';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
import {connect} from 'react-redux';

export class addExpensePage extends React.Component{
    onSubmit = (expense) => {
   this.props.onSubmit(expense);
   props.history.push('/');
    
};

render() {
return(
    <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
        onSubmit={this.onSubmit} 
    />
   </div>
);
};
}


const mapDispatchToProps = (dispatch) => ({onSubmit: (expense) => dispatch(addExpense(expense))});

export default connect(undefined, mapDispatchToProps)(addExpensePage);