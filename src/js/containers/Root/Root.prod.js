import React, { Component } from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { HashRouter } from 'react-router-dom'

import { Toastr } from './../../components'

class Root extends Component {
  render() {
    const { store, component } = this.props

    return (
      <Provider store={store}>
        <div className="full-height-container">
          <HashRouter>
            {router(store)}
          </HashRouter>
          <Toastr error ={store.getState().app.message} show={store.getState().app.showLog} />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  component: PropTypes.node.isRequired
}

export default Root
