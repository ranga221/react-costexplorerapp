import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import moment from 'moment';

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

//test('test Expense form', () => {
    //const wrapper = shallow(<ExpenseForm />);
   // expect(wrapper).toMatchSnapshot();

//});

//test('test Expense form with data', () => {

    //const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    //expect(wrapper).toMatchSnapshot();

//});

//test('test onchange events', () => {
 //const wrapper = shallow(<ExpenseForm />);
 //expect(wrapper).toMatchSnapshot();
 //wrapper.find('form').simulate('submit', {
   //preventDefault: () => { }  
 //});
 //expect(wrapper.state('error').length).toBeGreaterThan(0);
 //expect(wrapper).toMatchSnapshot();
//});


//test('test onchange events', () => {
    //const value = 'New Description';
    //const wrapper = shallow(<ExpenseForm />);
   // wrapper.find('input').at(0).simulate('change', {
     //target: { value }  
    //});
    //expect(wrapper.state('description')).toBe(value);
   //});


//test('test onchange events', () => {
//const value = 'New Description';  
//const wrapper = shallow(<ExpenseForm />);  
//wrapper.find('input').at(0).simulate('change', {
//  target: { value }   
// }); 
// expect(wrapper.state('note')).toBe(value);
// });

//test('testing on submit by create mock function of on submit', () => {
 //const onSubmitSpy = jest.fn();
 //const wrapper = shallow(<ExpenseForm expense={expense[0]} onSubmit={onSubmitSpy} />);
//wrapper.find('form').simulate('submit', {
    //preventDefault: () => { }
//});
//expect (wrapper.state('error')).toBe('');
//expect(onSubmitSpy).toHaveBeenLastCalledWith({
//description: expenses[0].description,
//amount: expenses[0].amount,
//note: expenses[0].note,
//createdAt: expenses.createdAt
//});
//});


//test('should set new date on date change', () => {
//const now = moment();
//const wrapper = shallow(<ExpenseForm />);
//wrapper.find('SingleDatePicker').prop('onDateChange')(now);
//expect(wrapper.state(createdAt)).toEqual(now);

//});