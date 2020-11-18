import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseItem from '../../components/ExpenseItem';

const expense = {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: moment(0)
}

test('should render expense item component on passinge expense', () => {
    const wrapper = shallow(<ExpenseItem {...expense}/>)
    expect(wrapper).toMatchSnapshot()
})