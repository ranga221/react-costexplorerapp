import React from 'react';
import ReactDOM from 'react-dom';
import Approuter from "./routes/approuter"
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';
import './playgrounds/es6promises';

const store = configureStore();

const jsx = (
<Provider store={store}>
 <Approuter />
 </Provider>   
);

ReactDOM.render(jsx, document.getElementById('app'));

