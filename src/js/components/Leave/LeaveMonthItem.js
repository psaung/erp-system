import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LeaveMonthItem extends Component {
  render() {

    const weekDayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const  fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const { date } = this.props
    const day = date !== " "?  weekDayArr[date.getDay()]: " "
    return(
      <td style={{ textAlign: 'center' }}>
        { date !== " " ? 
          <span style={{ cursor: 'pointer' }}>
              <span style={{ color: 'green' }}>
              { date.toLocaleString().split(',')[0] }
              </span>
              <div style={{ margin: '10px 0px 5px 0px' }}>
                Half Leave: { this.props.half || 0 }
              </div>
              <div style={{ margin: '10px 0px' }}>
                Full Leave: { this.props.full || 0 } 
              </div>
          </span> 
          :
          <span>{ " " }</span>
        }
      </td>
    )
  }
}

LeaveMonthItem.propTypes = {
  date: PropTypes.object.isRequired,
}

export default LeaveMonthItem
