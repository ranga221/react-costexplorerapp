import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove action object', () =>{
const action = removeExpense({id: '2456'});
expect(action).toEqual({
type:'REMOVE_EXPENSE',
id:'2456'
});
});


test('should setup edit action object', () => {
const action = editExpense('2456', {note:'New note Value'});
expect(action).toEqual({
    type:'EDIT_EXPENSE', 
    id:'2456',
    updates: {
        note: 'New note Value'
    }
});
});


test('should setup add object', () => {
const expenseDate ={
    description:'Coffee', 
    amount:100, 
    createdAt:109500,
    note:'This was long ago'
}

const action = addExpense(expenseDate);
expect(action).toEqual({
type:'ADD_EXPENSE',
expense:{
    ...expenseDate,
    id: expect.any(String)
}
});
});