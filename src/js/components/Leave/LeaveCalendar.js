import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LeaveCalendarItem from './LeaveCalendarItem'

class LeaveCalendar extends Component {
  render() {
    const { month, year } = this.props
    const  fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return (
      <div className="grid__col--3 calendar">
        <LeaveCalendarItem month={month} year={year} fullMonth={fullMonths[month - 1]}/>
      </div>
    )
  }
}

LeaveCalendar.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired
}

export default LeaveCalendar 
