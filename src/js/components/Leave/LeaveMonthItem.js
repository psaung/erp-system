import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LeaveMonthItem extends Component {
  render() {

    const weekDayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const  fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const { date } = this.props
    const day = weekDayArr[date.getDay()]
    return(
      <li>
        { date.getDate() } { day } { fullMonths[date.getMonth()] }
      </li>
    )
  }
}

LeaveMonthItem.propTypes = {
  date: PropTypes.object.isRequired,
}

export default LeaveMonthItem
