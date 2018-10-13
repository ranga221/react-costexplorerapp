import React from 'react';
import Header from '../../components/Header';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import {shallow} from 'enzyme';


test('testing Header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    
    //expect(wrapper.find('h1').text()).toBe('Cost Explorer');
//const renderer = new ReactShallowRenderer();
//renderer.render(<Header />);
//expect(renderer.getRenderOutput()).toMatchSnapshot();
});