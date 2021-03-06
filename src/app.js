import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setFilterText} from './actions/filters';
import visibleExpenses from './selectors/expenses';
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore()

store.dispatch(addExpense({description: 'Water Bill', amount: 4500}))
store.dispatch(addExpense({description: 'Gas Bill', createdAt:1000}))
store.dispatch(addExpense({description: 'rent', amount: 109500}))


const jsx = (
    <Provider store={store}>
       <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.querySelector('#app'))


