import React from 'react';
import {shallow} from 'enzyme';
import {LoginPage}  from '../../components/Loginpage';

test('should correctly render login page', () => {
const wrapper = shallow(<LoginPage />);
expect(wrapper).toMatchSnapshot();
});