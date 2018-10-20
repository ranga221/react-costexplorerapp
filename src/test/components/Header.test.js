import React from 'react';
import { Header } from '../../components/Header';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import {shallow} from 'enzyme';
import Loginpage from '../../components/Loginpage';


test('testing Header', () => {
    const wrapper = shallow(<Header startLogout ={() => {}} />);
    expect(wrapper).toMatchSnapshot();

});
    
test('testing Header', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<Loginpage startLogin ={startLogin} />);
wrapper.find('button').simulate('click');
expect(startLogin).toHaveBeenCalled();

    
    //expect(wrapper.find('h1').text()).toBe('Cost Explorer');
//const renderer = new ReactShallowRenderer();
//renderer.render(<Header />);
//expect(renderer.getRenderOutput()).toMatchSnapshot();
});