import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import {
  Login,
  Register,
  Error404,
  AdminPanel,
  UnAuthorize,
} from './containers'

export default(store) => {
  const { dispatch } = store

  const customRender = (props) => {
    console.log(store.getState)
    const { auth } = store.getState()
    
    // check authorization is set 
    if(auth) {
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
