import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchResources } from './../actions/api-actions'
import {
	Header,
	LeaveCalendar,
  Loader,
} from './../components'

class Leave extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    this.props.fetchResources('leavelogs')
  }

  render() {
    const { result, isFetching } = this.props.api
    return (
      <div>
        <Helmet>
          <title>Leave</title>
        </Helmet>
        <Header heading="Leave" />
        <main className="l-main">
          { isFetching ?
            <Loader text="Loading leave" />
            :
            <div className="panel">
              <h3 className="panel__heading">Leave Panel</h3>
              <div className="panel__body">
                <LeaveCalendar month="9" year="2017" />
              </div>
            </div>
          }
        </main>
      </div>
    ) 
  }
}

Leave.propTypes = {
  api: PropTypes.object.isRequired,
  fetchResources: PropTypes.func.isRequired,
}

export default connect(
  state => (state),
  { fetchResources }
)(Leave)
