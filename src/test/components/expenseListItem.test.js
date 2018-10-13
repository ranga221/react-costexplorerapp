import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItemForTest from '../../components/expenseListItemfortest';
import ExpenseListItem from '../../components/ExpenseListItem';

const expenses = [{
    id:1232,
    description:'Chew',
    note:'',
    amount: 2.00,
    createdAt:0 
}, {
    id:12325,
    description:'Gas Bill',
    note:'',
    amount: 3.00,
    createdAt:-1000 
},{
    id:12327,
    description:'Bus Bill',
    note:'',
    amount: 10.00,
    createdAt:-1000
}];

test('testing expense List item', () => {
const wrapper = shallow(<ExpenseListItemForTest {...expenses[0]} />);
expect(wrapper).toMatchSnapshot();
});