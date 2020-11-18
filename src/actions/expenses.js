import {v4 as uuid} from 'uuid';

//action generators for expensesReducer

//add expense
export const addExpense = ({description='', note='', amount=0, createdAt=0} = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}

//remove expense 
export const removeExpense = ({id}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

//edit expense

export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}