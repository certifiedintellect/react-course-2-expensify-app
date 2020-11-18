import React from 'react';
import {connect} from 'react-redux'
import {editExpense, removeExpense} from '../actions/expenses'
import ExpenseForm from './ExpenseForm'

const EditExpense = (props) => {
  
    return (
      <div>
        This is EditExpenseComponent for {props.match.params.id}
        <ExpenseForm expense={props.expense}
        onSubmit = {(expense) => {
           props.dispatch(editExpense(props.match.params.id, expense))
           props.history.push('/')
        }}/>
        <button onClick={() => {
           props.dispatch(removeExpense({id:props.match.params.id}))
           props.history.push('/')
        }}>Remove</button>
     </div>
     )
  }
    

const mapStateToProps = (state, props) => (
  {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id 
    })
  }
)

export default connect(mapStateToProps)(EditExpense)