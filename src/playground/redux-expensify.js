import {createStore, combineReducers} from 'redux';
import {v4 as uuid} from 'uuid';

//action generators for expensesReducer

//add expense
const addExpense = ({description='', note='', amount=0, createdAt=0} = {}) => {
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
const removeExpense = ({id}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
}

//edit expense

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}

//action generators for filters reducer

const setFilterText = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (startDate=0) => ({
    type: 'SET_START_DATE',
    startDate
})


const setEndDate = (endDate=0) => ({
    type: 'SET_END_DATE',
    endDate
})

const expensesReducerDefaultState = [];

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id != action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                   return {
                       ...expense,
                       ...action.updates
                   }
                }
                return expense
            })
        default:
            return state;
    }
}


const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state
    }
}



const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
}))



const getVisibleExpenses = (expenses, {text, startDate, endDate, sortBy}) => {
    
    const filteredExpenses =  expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
       
        return startDateMatch && endDateMatch && textMatch
    })

    return filteredExpenses.sort((a, b) => {
        if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        } 
        else if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }
    })

}


store.subscribe(() => {
    const expenses = store.getState().expenses
    const filters = store.getState().filters

    const visibleExpenses = getVisibleExpenses(expenses, filters)
    console.log(visibleExpenses)
})


const expenseOne = store.dispatch(addExpense({description:'January rent', note:'rent', amount: 10, createdAt:1000}))
const expenseTwo = store.dispatch(addExpense({description:'Coffee bill', note:'coffee', amount: 50, createdAt:3000}))
//store.dispatch(removeExpense({id: expenseOne.expense.id}))
//store.dispatch(editExpense(expenseOne.expense.id, {amount: 500}))
//store.dispatch(setFilterText('rent'))
store.dispatch(sortByAmount())
//store.dispatch(sortByDate())
//store.dispatch(setStartDate(0))
//store.dispatch(setEndDate(1000))









const demoState = {
    expenses: [{
        id: 'somerandom',
        description: 'January month rent',
        note: 'this is the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}

