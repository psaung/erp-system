import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
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
    const { params } = this.props.match
    this.props.fetchResources('leavelogs?month='+params.month);
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
              <div className="panel__heading">Leave Calendar <span style={{color: 'green'}}>{params.month}/{ new Date().getFullYear() }</span></div>
              <div className="panel__body">
                <Link to="/admin/leave" className="btn btn--material-success btn--rounded" style={{ margin: '15px 0px', display: 'inline-block'}}>Back to calendar</Link>
                { result &&
                  <LeaveMonthCalendar month={params.month} leaves={result}/>
                } 
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
