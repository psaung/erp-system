import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { connect } from 'react-redux'
import { Header } from './../components'

class Setting extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Setting</title>
        </Helmet>
        <Header heading="Setting" />
        <main className="l-main">
          <div className="panel">
            <h3 className="panel__heading">Setting</h3>
            <div className="panel__body">
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default Setting 
