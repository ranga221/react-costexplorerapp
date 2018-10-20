import React from 'react'
import { connect } from 'react-redux';
import { startRemoveExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import moment from 'moment';

const ExpenseListItem = ({dispatch, id, description, amount, creadtedAt}) => (
<div>
<Link className="list-item" to={`/edit/${id}`}>
<div>
<h3 className="list-item__title">{description}</h3>
<span className="list-itenm__sub_title">{moment(creadtedAt).format('MMMM Do, YYYY')}</span>
</div>
<h3 className="list-item__date">{numeral(amount / 100).format('$0,0.00')}</h3>
<p>
</p>
</Link>

<button onClick={() => {
    dispatch(startRemoveExpense({ id }));
}}>Remove</button>
</div>

);

export default connect()(ExpenseListItem);