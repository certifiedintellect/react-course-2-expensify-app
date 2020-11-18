import moment from 'moment';
import {setFilterText, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters'

test('should setup set filter text action object', () => {
    const result = setFilterText('test')
    const expectedResult = {
        type: 'SET_TEXT_FILTER',
        text: 'test'
    }
    expect(result).toEqual(expectedResult)
})


test('should setup set filter text action object with default values', () => {
    const result = setFilterText()
    const expectedResult = {
        type: 'SET_TEXT_FILTER',
        text: ''
    }
    expect(result).toEqual(expectedResult)
})


test('should setup sort by amount action object', () => {
    const result = sortByAmount()
    const expectedResult = {
        type: 'SORT_BY_AMOUNT'
    }
    expect(result).toEqual(expectedResult)
})


test('should setup sort by date action object', () => {
    const result = sortByDate()
    const expectedResult = {
        type: 'SORT_BY_DATE'
    }
    expect(result).toEqual(expectedResult)
})


test('should setup setStartDate action object', () => {
    const result = setStartDate(moment(1000))
    const expectedResult = {
        type: 'SET_START_DATE',
        startDate: moment(1000)
    }
    expect(result).toEqual(expectedResult)
})


test('should setup setEndDate action object', () => {
    const result = setEndDate(moment(1000))
    const expectedResult = {
        type: 'SET_END_DATE',
        endDate: moment(1000)
    }
    expect(result).toEqual(expectedResult)
})

