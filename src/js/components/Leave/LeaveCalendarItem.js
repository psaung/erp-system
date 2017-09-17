import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LeaveCalendarItem extends Component { 
  render() {
    const { day, month, year } = this.props
    return (
      <div className="calendar__item ta-center">
        <h3>{day}</h3>
        <div className="calendar__ion-group">
          <i className="calendar__ion-icon ion-man" /> x 
          <span>N/A</span>
        </div>
        <div className="calendar__ion-group">
          <i className="calendar__ion-icon ion-woman" /> x 
          <span>N/A</span>
        </div>
        <div className="ta-center">
          <button className="btn btn--white btn--rounded">View Details</button>
        </div>
      </div>
    )
  }
}

LeaveCalendarItem.propTypes = {
  day: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
}

export default LeaveCalendarItem
