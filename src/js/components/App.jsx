import React, { Component } from 'react'

import IncrementButton from './components/IncrementButton.jsx'
import DecrementButton from './components/DecrementButton.jsx'

// Initial state should be initialized somewhere

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  handleIncrement () {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleDecrement () {
    this.setState({
      count: this.state.count - 1
    })
  }

  render () {
    console.log('rendered')
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <IncrementButton callback={this.handleIncrement} />
        <DecrementButton callback={this.handleDecrement} />
      </div>
    )
  }
}
