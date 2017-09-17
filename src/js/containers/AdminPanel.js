import React from 'react'
import { Nav } from './../components'
import { Switch, Route } from 'react-router'

import Dashboard from './Dashboard'
import TimeCard from './TimeCard'
import Department from './Department'

const AdminPanel = props => ({
  render() {
    return(
      <div className="l-content-wrapper">
        <Nav location={props.history.location}/>
        <main className="l-main">
          <Switch>
            <Route exact path="/admin/" component={Dashboard} />
            <Route path="/admin/timecard" component={TimeCard} />
            <Route path="/admin/department" component={Department} />
            <Route render={()=> <div>Nothing found</div>} />
          </Switch> 
        </main>
      </div>
    )
  }
})

export default AdminPanel 
