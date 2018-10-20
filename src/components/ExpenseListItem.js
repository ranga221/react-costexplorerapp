import React from 'react'
import { connect } from 'react-redux';
import { startRemoveExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const ExpenseListItem = ({dispatch, id, description, amount, creadtedAt}) => (
<div>
<Link to={`/edit/${id}`}>
<h3>{description}</h3>

</Link>

<p>
{numeral(amount / 100).format('$0,0.00')}
-
{moment(creadtedAt).format('MMMM Do, YYYY')}
</p>
<button onClick={() => {
    dispatch(startRemoveExpense({ id }));
}}>Remove</button>
</div>

);

export default connect()(ExpenseListItem);