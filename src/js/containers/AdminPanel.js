import React from 'react'
import { Nav } from './../components'
import { Switch, Route } from 'react-router'
import Dashboard from './Dashboard'

const AdminPanel = props => ({
  render() {
    return(
      <div className="l-content-wrapper">
        <Nav />
        <main className="l-main">
          <Switch>
            <Route exact path="/admin/" component={Dashboard} />
            <Route render={()=> <div>Nothing found</div>} />
          </Switch> 
        </main>
      </div>
    )
  }
})

export default AdminPanel 
