import React from 'react'
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItemForTest = ({id, description, amount, creadtedAt}) => (
<div>
<Link to={`/edit/${id}`}>
<h3>{description}</h3>
</Link>
<p>{amount}-{creadtedAt}</p>
</div>
);

export default ExpenseListItemForTest;



