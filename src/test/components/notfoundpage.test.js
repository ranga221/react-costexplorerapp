import React from 'react';
import {shallow} from 'enzyme';
import NotFoundPage from '../../components/notfoundpage';


test('testing not found page', () => {
const wrapper = shallow(<NotFoundPage />);
expect(wrapper).toMatchSnapshot();
});