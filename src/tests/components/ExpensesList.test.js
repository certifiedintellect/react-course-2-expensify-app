import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesList} from '../../components/ExpensesList';
import moment from 'moment';

const expenses = [
    {
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
  

test('testing rendering of expenses list component ', () => {
    const wrapper = shallow(<ExpensesList expenses = {expenses}/>)
    expect(wrapper).toMatchSnapshot()
})


test('testing rendering of expenses list component with no expenses ', () => {
    const wrapper = shallow(<ExpensesList expenses = {[]}/>)
    expect(wrapper).toMatchSnapshot()
})
