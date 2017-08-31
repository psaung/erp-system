import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor() {
    super()
    this.incrementAsync = this.incrementAsync.bind(this)
    this.decrementAsync = this.decrementAsync.bind(this)
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props
    return(
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
        <div>
          {value} times
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}

export default Counter
