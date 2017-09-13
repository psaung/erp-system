import React from 'react'
import { Switch, Route } from 'react-router'
import {
  Dashboard,
  Login,
  Register,
  Error404,
  AdminPanel,
} from './containers'

export default(store) => {
  const { dispatch } = store
  return (
      <Switch>
        <Route path="/admin" component={AdminPanel} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={Error404}/>
      </Switch>
  )
}
