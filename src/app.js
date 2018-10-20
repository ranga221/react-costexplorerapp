import React from 'react';
import ReactDOM from 'react-dom';
import Approuter, { history } from "./routes/approuter"
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';
import './playgrounds/es6promises';
import { firebase } from './firebase/firebase';


const store = configureStore();

const jsx = (
<Provider store={store}>
 <Approuter />
 </Provider>   
);

let hasRendered = false;

const renderApp = () => {
if(!hasRendered){
ReactDOM.render(jsx, document.getElementById('app')); 
hasRendered = true; 
}

};

ReactDOM.render(<p>Load...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
if(user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
    renderApp();
    history.push('/create');
    
    });
} else {
    store.dispatch(logout());
   renderApp();
   history.push('/home');
}
});