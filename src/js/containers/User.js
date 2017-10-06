import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { connect } from 'react-redux'
import { loadUser } from './../actions/api-actions'
import {
  Header,
  UserList,
  UserForm,
} from './../components'

class User extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    this.props.loadUser('puss');
  }

  render() {
    console.log(this.props.api)
    const { result } = this.props.api
    if(!result) {
      return <h1>Loading User</h1>
    }
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
              <UserList users={result} />
            </div>
          </div>
          <UserForm />
        </main>
      </div>
    )
  }
}

User.propTypes = {
  api: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
}

export default connect(state => (state), {loadUser})(User)
