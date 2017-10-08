import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { fetchResources } from './../actions/api-actions'
import {
  Nav,
  Header,
  TimeCardList,
  Loader,
} from './../components'

class TimeCard extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    this.props.fetchResources('timeframes')
  }

  render() {
    const { result, isFetching } = this.props.api
    return (
      <div>
        <Helmet>
          <title>Time Card</title>
        </Helmet>
        <Header heading="Time Card"/>
        <main className="l-main">
          { isFetching ?
            <Loader text="Loading timecard" />
            :
            <div className="panel">
              <h3 className="panel__heading">Time Card</h3>
              <div className="panel__body">
                { /* <TimeCardList /> */ }
              </div>
            </div>
          }
        </main>
      </div>
    )
  }
}

TimeCard.propTypes = {
  api: PropTypes.object.isRequired,
  fetchResources: PropTypes.func.isRequired,
}

export default connect(
  state => (state),
  { fetchResources }
)(TimeCard)
