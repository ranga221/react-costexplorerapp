import React from 'react';
import {shallow} from 'enzyme';
import ExpenseList from '../../components/ExpenseList';

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

 //test('testing Expense List', () => {
//const wrapper = shallow(<ExpenseList expenses={expenses} />);
//expect(wrapper).toMatchSnapshot();
 //});


