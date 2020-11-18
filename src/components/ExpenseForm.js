import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';



export default class ExpenseForm extends React.Component{
 
    constructor(props){
        super(props)
        this.state = {
            description: props.expense? props.expense.description : '',
            note: props.expense ? props.expense.note: '',
            amount: props.expense ? (props.expense.amount).toString() : 0,
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: ''
        }
    }

   onDescriptionChange = (e) => {
       const description = e.target.value
       this.setState((state) => ({description}))
   }
   
   onNotesChange = (e) => {
       const note = e.target.value
       this.setState((state) => ({note}))
   }

   onAmountChange = (e) => {
       const amount = e.target.value

       if(amount.match(/^\d*(\.\d{0,2})?$/)){
           this.setState((state) => ({amount}))
       }

   }

   onDateChange = (createdAt) => {
       if(createdAt){
        this.setState((state) => ({createdAt}))
       }
   }

   onFocusChange = ({focused}) => {
       this.setState((state) => ({calenderFocused: focused}))
   }

   onFormSubmit = (e) => {
       const description = this.state.description
       const amount = this.state.amount

       e.preventDefault()

       if(!description || !amount){
            this.setState((state) => ({error: 'Please provide description and amount'}))
       } else{
           this.props.onSubmit({
               description: this.state.description,
               amount: parseFloat(this.state.amount, 10) ,
               createdAt: this.state.createdAt.valueOf(),
               note: this.state.note
           })
       }

   }

    render(){
        return (
            <div>
               {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.onFormSubmit}>
                  <input type="text"
                   placeholder="description"
                   value = {this.state.description}
                   onChange = {this.onDescriptionChange}
                   autoFocus />
                   <input type="text"
                   placeholder="amount"
                   value = {this.state.amount}
                   onChange = {this.onAmountChange}/>
                   <SingleDatePicker
                     date={this.state.createdAt} 
                     onDateChange = {this.onDateChange}
                     focused={this.state.calenderFocused}
                     onFocusChange={this.onFocusChange} 
                     numberOfMonths = {1}
                     isOutsideRange = {() => false}
                    />
                   <textarea placeholder="Enter the notes (optional)" 
                   value = {this.state.note}
                   onChange = {this.onNotesChange}/>
                   <button>Add Expense</button>
               </form>
            </div>
        )
    }
}

