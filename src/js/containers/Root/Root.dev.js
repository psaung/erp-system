import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import DevTools from './../DevTools'
import { Toastr } from './../../components'

class Root extends Component {
  render() {
    const { store, router } = this.props

    return (
      <Provider store={store}>
        <div className="full-height-container">
          <HashRouter>
            {router(store)}
          </HashRouter>
          <DevTools />
          <Toastr error ={store.getState().app.message} show={store.getState().app.showLog} />
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
