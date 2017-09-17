import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { connect } from 'react-redux'
import { Nav, Header, TimeCardList } from './../components'

class TimeCard extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Time Card</title>
        </Helmet>
        <Header heading="Time Card"/>
        <div className="panel">
          <h3 className="panel__heading">Time Card</h3>
          <div className="panel__body">
            <TimeCardList />
          </div>
        </div>
      </div>
    )
  }
}

export default TimeCard
