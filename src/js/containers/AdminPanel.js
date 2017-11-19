import React from 'react'
import { Nav } from './../components'
import { Switch, Route } from 'react-router'

import {
  Dashboard,
  TimeCard,
  Department,
  Leave,
  LeaveMonth,
  Task,
  Finance,
  FinanceDetail,
  User,
  UserDetail,
  Setting,
} from './index'

const AdminPanel = props => ({
  render() {
    return(
      <div className="l-content-wrapper">
        <Nav location={props.history.location}/>
        <Switch>
          <Route exact path="/admin/" component={Dashboard} />
          <Route path="/admin/timecard" component={TimeCard} />
          <Route path="/admin/department" component={Department} />
          <Route path="/admin/leave" component={Leave} />
          <Route path="/admin/task" component={Task} />
          <Route exact path="/admin/finance" component={Finance} />
          <Route path="/admin/finance/:financeId" component={FinanceDetail} />
          <Route exact path="/admin/user" component={User} />
          <Route path="/admin/user/:userId" component={UserDetail} />
          <Route path="/admin/setting" component={Setting} />

          <Route render={()=> <div>Nothing found</div>} />
        </Switch> 
      </div>
    )
  }
})

export default AdminPanel 
