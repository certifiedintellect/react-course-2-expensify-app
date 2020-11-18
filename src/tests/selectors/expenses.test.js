import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';

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

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1]])
})


test('should filter by set start date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(1000),
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0]])
})


//we can also add test cases fpr setting end date, sort by date, sort by amount