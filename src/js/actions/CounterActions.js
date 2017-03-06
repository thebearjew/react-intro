import { INCREMENT, DECREMENT } from './CounterTypes.js'

export const incrementCounter = () => {
  return {
    type: INCREMENT
  }
}

export const decrementCounter = () => {
  return {
    type: DECREMENT
  }
}
