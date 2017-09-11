import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Counter from './../components/Counter'

class Dashboard extends Component {
  constructor() {
    super()
  }
  
  render() {
    const { store } = this.props
    const action = type => store.dispatch({type})
    return (
      <div className="l-auth">
          <Counter
            value={store.getState()}
            onIncrement={() => action('INCREMENT')}
            onDecrement={() => action('DECREMENT')}
            onIncrementAsync={() => action('INCREMENT_ASYNC')}
            onIncrementIfOdd={() => action('INCREMENT_IF_ODD')} />
      </div>
    )
  }
}

Dashboard.propTypes = {
  store: PropTypes.object,
}


export default Dashboard
