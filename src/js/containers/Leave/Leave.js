import React, { Component } from 'react'
import { Switch, Route } from 'react-router'

import LeaveYearView from './LeaveYearView'
import LeaveMonthView from './LeaveMonthView'
// import { LeaveDayView } from './LeaveDayView'

class Leave extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/admin/leave/" component={LeaveYearView} />
        <Route path="/admin/leave/month/:month" component={LeaveMonthView} />
        { /*<Route path="/leave/day" component={LeaveDayView} />*/ }
      </Switch>
    )
  }
}

export default Leave
