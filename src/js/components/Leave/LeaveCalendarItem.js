import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class LeaveCalendarItem extends Component { 
  render() {
    const { half, full, month, year, fullMonth, currentMonth } = this.props
    return (
      <div className="calendar__item ta-center" style={{backgroundColor: currentMonth ? '#6dbb70' : '#d0e6fe' }}>
        <h3>{fullMonth}</h3>
        <div className="calendar__ion-group">
          <i className="calendar__ion-icon ion-man" /> x 
          <span>{half}</span>
        </div>
        <div className="calendar__ion-group">
          <i className="calendar__ion-icon ion-woman" /> x 
          <span>{full}</span>
        </div>
        <div className="ta-center">
          <Link to={`/admin/leave/month/${month}`}>
            <button className="btn btn--white btn--rounded">View Details</button>
          </Link>
        </div>
      </div>
    )
  }
}

LeaveCalendarItem.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  fullMonth: PropTypes.string.isRequired,
  currentMonth: PropTypes.bool.isRequired,
}

export default LeaveCalendarItem
