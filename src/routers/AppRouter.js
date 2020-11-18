import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpensifyDashboard from '../components/ExpensifyDashboard'
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import HelpExpense from '../components/HelpExpense';
import NotFound from '../components/NotFound';
import Header from '../components/Header';

const AppRouter = () => (
   <BrowserRouter>
    <div>
       <Header/>
       <Switch>
        <Route path="/" component={ExpensifyDashboard} exact={true}/>
        <Route path="/create" component={AddExpense}/>
        <Route path="/edit/:id" component={EditExpense}/>
        <Route path="/help" component={HelpExpense}/>
        <Route component={NotFound}/>
     </Switch>
    </div>
  </BrowserRouter>
)


export default AppRouter;