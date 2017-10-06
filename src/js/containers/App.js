import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import { Loader, Toastr } from './../components'

class App extends Component {
  render() {
    const { message, showLog } = this.props.app
    const { isFetching } = this.props.auth
    return(
      <div>
        { isFetching && 
          <div className="loader__container">
            <Loader text="Check Authorization"/>
          </div>
        }
        {this.props.children}
        <Toastr error={message} show={showLog} />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  app: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

export default connect(
    state => (state) 
)(App)

