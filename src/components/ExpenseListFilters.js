import React from 'react';
import ExpenseList from './ExpenseList';
import { connect } from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
<div className="conent-container">
<div className="input-group">
<div className="input-group__item">
<input type='text' 
className="text-input"
 value={props.filters.text}  
 onChange={(e) => { 
    props.dispatch(setTextFilter(e.target.value));
}}/>
</div>
<div>
<select
value={props.filters.sortBy}
onChange={(e) =>{
    if(e.target.value === 'date') {
        props.dispatch(sortByDate());
    } else if (e.target.value === 'amount') {
        props.dispatch(sortByAmount());
    }
}}
>
<option value="date">Date</option>
<option value="amount">Amount</option>
</select>
</div>



</div>
<div></div>
</div>


);

const mapStateToProps = (state) => {
return{
    filters: state.filters
}
};

export default connect(mapStateToProps)(ExpenseListFilters);