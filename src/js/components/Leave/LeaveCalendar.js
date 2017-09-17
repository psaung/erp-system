import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LeaveCalendarItem from './LeaveCalendarItem'

class LeaveCalendar extends Component {
  render() {
    const { month, year } = this.props
    return (
      <div className="calendar">
        <h3 className="ta-center">{ month } { year }</h3> 
        <LeaveCalendarItem month={month} year={year} day="3" />
      </div>
    )
  }
}

LeaveCalendar.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
}

export default LeaveCalendar 
