import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) => ({
type: 'ADD_EXPENSE',
expense
});


export const startAddExpense = (expenseDate = {}) => {
    return (dispatch) => {
const { 
    description='', 
    amount=0, 
    createdAt=0,
    note=''
} = expenseDate;

const expense = {description, amount, createdAt, note };

database.ref('expenses').push(expense).then((ref) =>{
dispatch(addExpense({
id: ref.key,
...expense
}));
});
    };
}

export const editExpense =(id, updates ) => ({
    type: 'EDIT_EXPENSE',
        id,
        updates
    });
        
export const removeExpense =({id} = {}) => ({ type: 'REMOVE_EXPENSE', id});