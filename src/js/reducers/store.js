import { createStore } from 'redux'

import counter from './counter.js'
import { incrementCounter, decrementCounter } from '../actions/CounterActions.js'

let store = createStore(counter)

// Everytime the state changes, log it
let unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCounter)
store.dispatch(decrementCounter)
