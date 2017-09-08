import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor() {
    super()
    this.incrementAsync = this.incrementAsync.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }

  incrementIfOdd() {
    if(this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    this.props.onIncrementAsync
  }
  
  render() {
    const {value, onIncrementAsync, onIncrement, onDecrement} = this.props
    return(
      <div>
        <button onClick={onIncrementAsync}>
          Testing Ajax Api Calls
        </button>
        {value}
        { /*
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if Odd
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        {' '}
        <div>
          Clicked: {value} times
        </div>
        */ }
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
}

export default Counter
