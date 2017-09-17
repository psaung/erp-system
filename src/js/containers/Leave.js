import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import {
	Header,
	LeaveCalendar,
} from './../components'

class Leave extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Leave</title>
        </Helmet>
        <Header heading="Leave" />
				<div className="panel">
					<h3 className="panel__heading">Leave Panel</h3>
					<div className="panel__body">
						<LeaveCalendar month="9" year="2017" />
					</div>
				</div>
      </div>
    ) 
  }
}

export default Leave 
