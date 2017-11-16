import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LeaveCalendarItem from './LeaveCalendarItem'

class LeaveCalendar extends Component {
  render() {
    const { month, year, half, full } = this.props
    const  fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const currentMonth = new Date().getMonth()+1 === month ? true : false
    return (
      <div className="grid__col--3 calendar">
        <LeaveCalendarItem month={month} year={year} fullMonth={fullMonths[month - 1]} currentMonth={currentMonth} half={half} full={full}/>
      </div>
    )
  }
}

LeaveCalendar.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
}

export default LeaveCalendar 
