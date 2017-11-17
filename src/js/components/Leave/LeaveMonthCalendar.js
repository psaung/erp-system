import React, { Component } from 'react'
import PropTypes from 'prop-types'

import LeaveMonthItem from './LeaveMonthItem'

class LeaveMonthCalendar extends Component {
  render() {
    const { month, leaves } = this.props
    const leaveMonth = {};
    if(leaves.length>0) {
      leaves.map( v => {
        const dayy = new Date(v.time).getDay();
          leaveMonth[dayy] = leaveMonth[dayy] || {};
        if(v.period === "full day") {
          leaveMonth[dayy].full= leaveMonth[dayy].full? leaveMonth[dayy].full+ 1 : 1;
        } else {
          leaveMonth[dayy].half = leaveMonth[dayy].half ? leaveMonth[dayy].half + 1 : 1;
        }
      })
    }

    console.log(leaveMonth)
    const year = new Date().getFullYear()
    const lastDay = new Date(year, parseInt(month), 0).getDate()
    const mockArr = Array.from(Array(lastDay).keys()).map(x => x + 1)
    let dateArr = mockArr
                      .map(item => new Date(year, month - 1, item))
                      .filter(dd => (dd.getDay() !== 0 && dd.getDay() !== 6))  
    const firstWeekday = dateArr[0].getDay();
    console.log(firstWeekday);
    const weekdayInANutShell = [0, 1, 2, 3, 4];
    const substiDay = weekdayInANutShell[firstWeekday-1];
    for( let i = 0; i < substiDay; i++ ) {
      dateArr.unshift(" ");
    }
    const rows = Math.ceil(dateArr.length / 5)
    let mockArrRows = []
    console.log(dateArr)
    for(let i = 0; i < rows; i++) {
      mockArrRows.push(dateArr.slice(i* 5, 5 * (i+1)))
    }
    console.log(rows)
    console.log(mockArrRows);
    return(
      <table className="table table--border">
        <thead>
          <tr className="heading" style={{ textAlign: 'center', color: 'green' }}>
            <td style={{ textAlign: 'center' }}>Monday</td>
            <td style={{ textAlign: 'center' }}>Tuesday</td>
            <td style={{ textAlign: 'center' }}>Wednesday</td>
            <td style={{ textAlign: 'center' }}>Thursday</td>
            <td style={{ textAlign: 'center' }}>Friday</td>
          </tr>
        </thead>
        <tbody>
            { mockArrRows.map( v => 
                <tr>
                 { v.map( x =>
                    <LeaveMonthItem date={x} key={`day ${ x !== " " ?  x.getDate() : Math.random()}`} half={ leaveMonth[x.getDate()] ? leaveMonth[x.getDate()].half : 0 } full={ leaveMonth[x.getDate()] ? leaveMonth[x.getDate()].full : 0} />
                  )}
                </tr>
            )}
        </tbody>
      </table>
    )
  }
}

LeaveMonthCalendar.propTypes = {
  month: PropTypes.string.isRequired,
  leaves: PropTypes.array.isRequired, 
}

export default LeaveMonthCalendar 
