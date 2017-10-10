import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { fetchResources } from './../../actions/api-actions'

import {
  Header,
  Loader,
  LeaveMonthCalendar,
} from './../../components'

class LeaveMonthView extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    this.props.fetchResources('leavelogs')
  }

  render() {
    const { result, isFetching } = this.props.api
    const { params } = this.props.match
    return (
      <div>
        <Helmet>
          <title>Leave</title>
        </Helmet>
        <Header heading="Leave Calender" />
        <main className="l-main">
          { isFetching ?
            <Loader text="loading leave data" />
            :
            <div className="panel">
              <div className="panel__heading">Leave Calendar</div>
              <div className="panel__body">
                <LeaveMonthCalendar month={params.month} />
              </div>
            </div>
          }
        </main>
      </div>
    )
  }
}

LeaveMonthView.propTypes = {
  api: PropTypes.object.isRequired,
  fetchResources: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
}

export default connect(
  state => (state),
  { fetchResources }
)(LeaveMonthView)
