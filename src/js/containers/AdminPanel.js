import React from 'react'
import { Nav } from './../components'
import { Switch, Route } from 'react-router'

import {
  Dashboard,
  TimeCard,
  Department,
  Leave,
  LeaveMonth,
  Role,
  Finance,
  User,
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
          <Route path="/admin/role" component={Role} />
          <Route path="/admin/finance" component={Finance} />
          <Route path="/admin/user" component={User} />
          <Route path="/admin/setting" component={Setting} />

          <Route render={()=> <div>Nothing found</div>} />
        </Switch> 
      </div>
    )
  }
})

export default AdminPanel 
