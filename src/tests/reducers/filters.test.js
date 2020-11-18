import filtersReducer from '../../reducers/filters';
import moment from 'moment';

const state = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

test('testing out filters reducers setting text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'rent'
    }
    const actualResult = filtersReducer(state, action)
    expect(actualResult).toEqual({...state, text: 'rent'})
})