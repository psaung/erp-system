import React from 'react'
import { Link } from 'react-router-dom'

const UnAuthorize = props => ({
  render() {
    return(
      <div className="l-unauthorize">
        <div>You dun hav enough permission to see this page</div>
        Sign In here with your admin account
        <Link to="/login">Sign In</Link>
      </div>
    )
  }
})

export default UnAuthorize
