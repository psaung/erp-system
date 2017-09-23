import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { Header } from './../components'

class Finance extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Finance</title>
        </Helmet>
        <Header heading="Finance" />
        <main className="l-main">
          <div className="panel">
            <h3 className="panel__heading">Finance</h3>
            <div className="panel__body">
            </div>
          </div>
        </main>
      </div>
    ) 
  }
}

export default Finance 
