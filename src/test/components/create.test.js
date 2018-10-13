import React from 'react';
import {shallow} from 'enzyme';
import {addExpensePage} from '../../components/create';


test('testing create function', () => {
const onSubmit = jest.fn();
const history = {push: jest.fn()};
const wrapper = shallow(<addExpensePage onSubmit={onSubmit} history={history} />);
expect(wrapper).toMatchSnapshot();
});