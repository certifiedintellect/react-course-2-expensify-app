import moment from 'moment'

const getVisibleExpenses = (expenses, {text, startDate, endDate, sortBy}) => {
    
    const filteredExpenses =  expenses.filter((expense) => {
        const momentCreatedAt = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(momentCreatedAt, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(momentCreatedAt, 'day') : true
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
       
        return startDateMatch && endDateMatch && textMatch
    })

    return filteredExpenses.sort((a, b) => {
        if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        } 
        else if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }
    })

}


export default getVisibleExpenses