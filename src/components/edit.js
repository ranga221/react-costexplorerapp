import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';

const EditExpenseDashboardPage = (props) => {
  
    console.log(props);
  return (
    <div  className="page-header" >
    <div className="content-container"> 
    <ExpenseForm 
    expense={props.expense}
    onSubmit={(expense) => {
      props.dispatch(editExpense(props.match.params.id, expense ));
      props.history.push('/dash');
      
    }}
    />
    </div>
   </div>
  );
};

const mapStateToProps = (state, props) => {
return {
  expense: state.expenses.find((expense) => {
 return expense.id === props.match.params.id;
  })
};

};
export default connect(mapStateToProps)(EditExpenseDashboardPage);