import selectExpenses from '../../selectors/expenses';
import { sortByDate } from '../../actions/filters';

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


test('should filter by text value', () =>{
    const filters ={
        text: 'Bill',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2]]);
})


test('should filter by text value', () =>{
    const filters ={
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
})
