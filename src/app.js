import React from 'react';
import ReactDOM from 'react-dom';
import Approuter from "./routes/approuter"
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: 'Phone Bill', amount:45}));
store.dispatch(addExpense({description: 'Home Bill', createdAt:1000}));
store.dispatch(addExpense({description: 'Rent', amount:450}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);



const jsx = (
<Provider store={store}>
 <Approuter />
 </Provider>   
);

ReactDOM.render(jsx, document.getElementById('app'));

