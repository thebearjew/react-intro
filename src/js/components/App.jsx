import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render() {
    return (
      <p>React Rendered!</p>
    )
  }
}

console.log('testing')

render(<App/>, document.getElementById('app'))

