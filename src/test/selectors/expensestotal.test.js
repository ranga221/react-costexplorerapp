import selectExpensesTotal from '../../selectors/expenses-total';

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


test('shoud return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});



test('shoud return correct expenses', () => {
    const res = selectExpensesTotal([expenses[1]]);
    expect(res).toBe(3.00);
});


test('shoud return Multiple correct expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(15.00);
});