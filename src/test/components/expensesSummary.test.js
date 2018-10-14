import React from 'react';
import {shallow} from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

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
    createdAt:0 
},{
    id:12327,
    description:'Bus Bill',
    note:'',
    amount: 10.00,
    createdAt:0
}];


test('should render correct amount', () => {
const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />)
expect(wrapper).toMatchSnapshot();
});

test('should render correct amount', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={10} expensesTotal={2350} />)
    expect(wrapper).toMatchSnapshot();
    });
    

