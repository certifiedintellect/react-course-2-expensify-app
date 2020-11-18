import React from 'react';
import {connect} from 'react-redux';
import {setFilterText, sortByAmount, sortByDate, setStartDate, setEndDate} from '../actions/filters'

import {DateRangePicker} from 'react-dates';

class ExpensesListFilter extends React.Component{
    state = {
        calenderFocused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    } 

    onFocusChange = (calenderFocused) => {
        this.setState((state) => ({calenderFocused}))
    }


    render(){
        return (
            <div>
            <input type="text" value={this.props.filters.text} onChange={(e) => {
                this.props.dispatch(setFilterText(e.target.value))
            }}/>
            <select value={this.props.filters.sortBy}
            onChange = {(e) => {
                if(e.target.value === 'date'){
                    this.props.dispatch(sortByDate())
                } else{
                    this.props.dispatch(sortByAmount())
                }
            }}>
               <option value="date">Date</option>
               <option value="amount">Amount</option>
            </select>
            <DateRangePicker
            startDate = {this.props.filters.startDate}
            endDate = {this.props.filters.endDate}
            onDatesChange = {this.onDatesChange}
            focusedInput = {this.state.calenderFocused}
            onFocusChange = {this.onFocusChange}
            numberOfMonths = {1}
            showClearDates = {true}
            isOutsideRange = {() => false}
            />
          </div>
        )
    }
}


const mapStateToProps = (state) => ({
    filters: state.filters
})

const ConnectedExpensesListFilter = connect(mapStateToProps)(ExpensesListFilter)

export default ConnectedExpensesListFilter