import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App.jsx'
import counter from './reducers/counter.js'

const store = createStore(counter)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
