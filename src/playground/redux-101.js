import {createStore} from 'redux';

const defaultState = {
    count: 0
}

const incrementCount = ({incrementBy = 1} = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy
  }
}


const decrementCount = ({decrementBy = 1} = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy
  }
}


const setCount = ({count}) => ({
  type: 'SET',
  count
})


const resetCount = () => ({
   type: 'RESET'
})


const store = createStore((state = defaultState, action) => {

  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state
  }

})


const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})


store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(incrementCount())
store.dispatch(resetCount())
store.dispatch(decrementCount({decrementBy: 5}))
store.dispatch(setCount({count: 101}))
