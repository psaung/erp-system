import React, { Component } from 'react'
import PropTypes from 'prop-types'

import LeaveMonthItem from './LeaveMonthItem'

class LeaveMonthCalendar extends Component {
  render() {

    const { month } = this.props
    const year = new Date().getFullYear()
    const lastDay = new Date(year, parseInt(month), 0).getDate()
    const mockArr = Array.from(Array(lastDay).keys()).map(x => x + 1)
    const dateArr = mockArr
                      .map(item => new Date(year, month - 1, item))
                      .filter(dd => (dd.getDay() !== 0 && dd.getDay() !== 6))  
    return(
      <div>
        <ul>
          { dateArr.map( x => 
            <LeaveMonthItem date={x} key={`day ${x.getDate()}`}/>
          )}
        </ul>
      </div>
    )
  }
}

LeaveMonthCalendar.propTypes = {
  month: PropTypes.string.isRequired,
}

export default LeaveMonthCalendar 
