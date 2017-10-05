import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import {
  Login,
  Register,
  Error404,
  AdminPanel,
  UnAuthorize,
} from './containers'
import * as authActions from './actions/auth-actions'

export default(store) => {
  const { dispatch } = store

  const customRender = (props) => {
    console.log(store.getState())
    console.log('cutom render')
    const { auth } = store.getState()
    // check authorization is set 
    if(!auth.isFetching) {
       // dispatch(authActions.checkAuth())
    }
    if(auth && auth.isAuthenticated && auth.role === "admin") {

      return <AdminPanel {...props} />
    } else {
      // if not render the UnAuthorize component
      return <UnAuthorize {...props} />
    }
  }

  return (
    <Switch>
      <Route path="/admin" render={customRender} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route component={Error404}/>
    </Switch>
  )
}
