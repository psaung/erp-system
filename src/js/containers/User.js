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
    console.log(this.props.api)
    const { data } = this.props.api
    return (
      <div>
        <Helmet>
          <title>User</title>
        </Helmet>
        <Header heading="User" />
        <main className="l-main">
          <div className="panel">
            <h3 className="panel__heading">User</h3>
            <div className="panel__body">
              <UserList users={data} />
            </div>
          </div>
          <UserForm />
        </main>
      </div>
    )
  }
}

User.propTypes = {
  api: PropTypes.object.isRequired
}

export default connect(state => (state))(User)
