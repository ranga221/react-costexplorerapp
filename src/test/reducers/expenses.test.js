import expensesReducer from '../../reducers/expenses';


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


test('testing default method', () => {
const state = expensesReducer(undefined,{type: '@@INIT'} );
expect(state).toEqual([]);

});


test('testing Remove function', () => {
const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
};
const state = expensesReducer(expenses, action);
expect(state).toEqual([expenses[0], expenses[2] ]);
})


test('test add function', () => {
const action = {
    type: 'ADD_EXPENSE',
    expense: expenses[0]
    }
const state = expensesReducer(undefined, action);
expect(state).toEqual([expenses[0]]);
});

test('testing Edit Function', () => {
const note = 'Hello';
    const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
   updates:{
    note
   }
}
const state = expensesReducer(expenses, action);
expect(state[1].note).toEqual(note);
});


test('testing amount update for Edit', () => {

const amount = 1000;
 const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id, 
    updates:{
        amount
    }
 }
const state = expensesReducer(expenses, action);
expect(state[2].amount).toEqual(amount);
});