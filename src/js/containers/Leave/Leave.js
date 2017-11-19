import React, { Component } from 'react'
import { Switch, Route } from 'react-router'

import LeaveYearView from './LeaveYearView'
import LeaveMonthView from './LeaveMonthView'
import LeaveDateView  from './LeaveDateView'

class Leave extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/admin/leave/" component={LeaveYearView} />
        <Route exact path="/admin/leave/month/:month" component={LeaveMonthView} />
        <Route path="/admin/leave/month/:month/date/:date" component={LeaveDateView} />
        { /*<Route path="/leave/day" component={LeaveDayView} />*/ }
      </Switch>
    )
  }
}

export default Leave
