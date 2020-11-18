import expensesReducer from '../../reducers/expenses';
import moment from 'moment'
const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: moment(0)
  },{
      id: '2',
      description: 'Rent',
      note: '',
      amount: 195000,
      createdAt: moment(0).subtract(4, 'days').valueOf()
  }, {
     id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
  }]
  

test('testing expenses reducer functioanlity', () => {
    const expense = {
        id: '4',
        description: 'desc',
        note: 'note',
        amount: 100,
        createdAt: moment(0)
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const actualResult = expensesReducer(expenses, action)
    expect(actualResult).toEqual([...expenses, expense])  
})

//similarly we can write for edit expense and remove expense

