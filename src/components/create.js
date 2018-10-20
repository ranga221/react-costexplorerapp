import React from 'react';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';
import {connect} from 'react-redux';

export class addExpensePage extends React.Component{
    onSubmit = (expense) => {
   this.props.startAddExpense(expense);
   this.props.history.push('/dash');
    
};

render() {
return(
    <div>
    <div className="page-header">
    <div className="content-container"></div>
    <h1>Add Expense</h1>
    </div>

    <div className="content-container">  
    <ExpenseForm 
        onSubmit={this.onSubmit} 
    />
    </div>
 
   </div>
);
};
}


const mapDispatchToProps = (dispatch) => ({startAddExpense: (expense) => dispatch(startAddExpense(expense))});

export default connect(undefined, mapDispatchToProps)(addExpensePage);