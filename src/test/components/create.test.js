import React from 'react';
import {shallow} from 'enzyme';
import {addExpensePage} from '../../components/create';





test('testing create function', () => {
const startAddExpense = jest.fn();
const history = {push: jest.fn()};
const wrapper = shallow(<addExpensePage startAddExpense={startAddExpense} history={history} />);
expect(wrapper).toMatchSnapshot();
});