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
    <div className="full-height-container">
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  )
}
