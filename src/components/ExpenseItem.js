import React from 'react';
import {Link} from 'react-router-dom'

const ExpenseItem = ({id, description, amount, createdAt}) => (
    <div>
      <h3>{description} - <Link to={`/edit/${id}`}>Edit Expense</Link></h3>
      <p>{amount} - {createdAt}</p>
      
    </div>
)



export default ExpenseItem;