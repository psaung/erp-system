import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import DevTools from './../DevTools'
import { Toastr } from './../../components'
import App from './../App'

class Root extends Component {
  render() {
    const { store, router } = this.props
    console.log(this.props)
    return (
      <Provider store={store}>
        <div className="full-height-container">
          <App>
            <HashRouter>
              {router(store)}
            </HashRouter>
            <DevTools />
          </App>
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  router: PropTypes.func.isRequired,
}

export default Root
