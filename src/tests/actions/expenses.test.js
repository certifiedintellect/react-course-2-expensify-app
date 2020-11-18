import {removeExpense, editExpense, addExpense} from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const actualResult = removeExpense({id: 'abc123'})
    const expectedResult = {
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    }
    expect(actualResult).toEqual(expectedResult)
})

test('should setup edit expense action object', () => {
    const actualResult = editExpense('abc123', {note: '', amount: 0})
    const expectedResult = {
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            note: '',
            amount: 0
        }
    }
    expect(actualResult).toEqual(expectedResult)
})


test('should setup add expense action object', () => {
    const expenseData = {description:'desc', note:'note', amount:100, createdAt:100}
    const actualResult = addExpense(expenseData)
    const expectedResult = {
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
           ...expenseData
        }
    }
    expect(actualResult).toEqual(expectedResult)
})


test('should setup add expense action object with default values', () => {
    const expenseData = {}
    const actualResult = addExpense(expenseData)
    const expectedResult = {
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    }
    expect(actualResult).toEqual(expectedResult)
})
