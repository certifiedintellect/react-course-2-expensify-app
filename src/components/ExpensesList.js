import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from './ExpenseItem';
import selectExpenses from '../selectors/expenses';

export const ExpensesList = (props) => (
    <div>
      <h3>Expenses List</h3>
      {
          props.expenses.map((expense) => {
              return <ExpenseItem key={expense.id} {...expense}/>
          })
      }
    </div>
)

const mapStateToProps = (state) => ({
    expenses: selectExpenses(state.expenses, state.filters)
})

const ConnectedExpensesList = connect(mapStateToProps)(ExpensesList)

export default ConnectedExpensesList