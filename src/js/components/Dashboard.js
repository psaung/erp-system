import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Counter from './Counter'
import Register from './Register'
import Login from './Login'
import FlashMessage from './FlashMessage'

class Dashboard extends Component {
  constructor() {
    super()
    this.showViews = this.showViews.bind(this)
    this.state = { views: 'login' }
  }
  
  showViews(params) {
    this.setState({
      views: params
    })
  }
  

  render() {
    const { store } = this.props
    const action = type => store.dispatch({type})
    return (
      <div className="l-auth">
        <Helmet>
          <title>ERP Dashboard</title>
        </Helmet>
        <div className="menu">
          <button onClick={() => this.showViews('login')}>Sign In</button>
          <button onClick={() => this.showViews('register')}>Sign Up</button>
          <button onClick={() => this.showViews('counter')}>Counter</button>
        </div>
        { this.state.views === 'counter' &&
          <Counter
            value={store.getState()}
            onIncrement={() => action('INCREMENT')}
            onDecrement={() => action('DECREMENT')}
            onIncrementAsync={() => action('INCREMENT_ASYNC')}
            onIncrementIfOdd={() => action('INCREMENT_IF_ODD')} />
        }
        {this.state.views === 'login' || this.state.views === 'register' ? 
        <div className="flex-centered-container">
          { this.state.views === 'login' &&
            <Login />
          }
          { this.state.views === 'register' &&
            <Register />
          }
        </div>
        : null 
         }
      </div>
    )
  }
}

Dashboard.propTypes = {
  store: PropTypes.object,
}


export default Dashboard
