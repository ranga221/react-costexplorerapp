import uuid from 'uuid';

export const addExpense =                                                                                                                               ({
    description='', 
    amount=0, 
    createdAt=0,
    note=''
} 
= {}) => ({
type: 'ADD_EXPENSE',
expense: {
    id: uuid(),
    description,
    amount,
    createdAt,
    note
}
});

export const editExpense =(id, updates ) => ({
    type: 'EDIT_EXPENSE',
        id,
        updates
    });
    
   

                
export const removeExpense =({id} = {}) => ({ type: 'REMOVE_EXPENSE', id});