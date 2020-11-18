import React from 'react';
import ExpensesList from './ExpensesList'
import ExpenseListFilter from './ExpenseListFilter';

const ExpensifyDashboard = () => (
    <div>
      This is ExpensifyDashboardComponent
      <ExpenseListFilter/>
      <ExpensesList/>
    </div>
)

export default ExpensifyDashboard;