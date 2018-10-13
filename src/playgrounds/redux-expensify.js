import {createStore, combineReducers, bindActionCreators} from 'redux';
import uuid from 'uuid';


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description:'RENT', note:'', amount:100, createdAt:0}));
const expenseTwo = store.dispatch(addExpense({ description:'Coffee', note:'', amount:500, createdAt:0}));

//store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500 }));

store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

//store.dispatch(setTextFilter('ren'));

//store.dispatch(setStartDate(125));
//store.dispatch(setEndDate(125));






const demoState ={
expenses: [{
id:'2236',
description:'Monthly Rent',
note:'Last dat payment',
amount:670,
CreatedAt:0
}],
filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
}
};