import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import moment from 'moment';

const expense = {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: moment(0)
}

test('testing rendering of expense form ', () => {
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
})

test('testing rendering of expense form with data' , () => {
    const wrapper = shallow(<ExpenseForm expense={expense}/>)
    expect(wrapper).toMatchSnapshot()
})