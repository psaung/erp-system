import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Nav, Header } from './../components'

class Dashboard extends Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div>
        <Header />
        <div className="panel">
          <h3 className="panel__heading">Application Log</h3>
        </div>
      </div>
    )
  }
}

export default Dashboard
