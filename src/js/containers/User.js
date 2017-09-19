import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { connect } from 'react-redux'
import {
  Header,
  UserList,
  UserForm,
} from './../components'

class User extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>User</title>
        </Helmet>
        <Header heading="User" />
        <div className="panel">
          <h3 className="panel__heading">User</h3>
          <div className="panel__body">
            <UserList users={[]}/>
          </div>
        </div>
        <UserForm />
      </div>
    )
  }
}

export default User
