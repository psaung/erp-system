import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Nav } from './../components'

class Dashboard extends Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div className="l-content-wrapper">
        <Nav />
        { /* main content here */ }
      </div>
    )
  }
}

Dashboard.propTypes = {
}


export default Dashboard
