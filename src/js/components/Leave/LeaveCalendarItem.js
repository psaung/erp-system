import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class LeaveCalendarItem extends Component { 
  render() {
    const { month, year, fullMonth } = this.props
    return (
      <div className="calendar__item ta-center">
        <h3>{fullMonth}</h3>
        <div className="calendar__ion-group">
          <i className="calendar__ion-icon ion-man" /> x 
          <span>N/A</span>
        </div>
        <div className="calendar__ion-group">
          <i className="calendar__ion-icon ion-woman" /> x 
          <span>N/A</span>
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
}

export default LeaveCalendarItem
