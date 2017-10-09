import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchResources } from './../../actions/api-actions'
import {
	Header,
	LeaveCalendar,
  Loader,
} from './../../components'

class LeaveYearView extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    this.props.fetchResources('leavelogs')
  }

  render() {
    const { result, isFetching } = this.props.api
    const mockArr = Array.from(Array(12).keys()).map(x => x + 1);
    const year = new Date().getFullYear()
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
                <h3 className="ta-center">{year}</h3>
                <div className="grid">
                  { mockArr.map( v => <LeaveCalendar month={v} year={year} key={`yearmonth${v}`}/> ) }
                </div>
              </div>
            </div>
          }
        </main>
      </div>
    ) 
  }
}

LeaveYearView.propTypes = {
  api: PropTypes.object.isRequired,
  fetchResources: PropTypes.func.isRequired,
}

export default connect(
  state => (state),
  { fetchResources }
)(LeaveYearView)
