import React from 'react'
import { Route } from 'react-router-dom'
import {
  Dashboard,
  Login,
  Register,
} from './containers'

export default(store) => {
  const { dispatch } = store
  return (
    <div>
      <Route exact path="/" component={Dashboard} />
      <Route path="login" component={Login} />
    </div>
  )
}
