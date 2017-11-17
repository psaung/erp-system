import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { connect } from 'react-redux'
import { fetchResources, loadUser } from './../actions/api-actions'
import {
  Header,
  UserDetail,
  Loader,
} from './../components'

class User extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    const { userId } = this.props.match.params
    this.props.fetchResources('users?id='+userId)
  }

  render() {
    console.log(this.props.api)
    const { result, isFetching } = this.props.api
    if(!result) {
      return <h1>Loading User</h1>
    }
    return (
      <div>
        <Helmet>
          <title>User Detail</title>
        </Helmet>
        <Header heading="User Detail" />
        <main className="l-main">
          { isFetching ? 
          <div style={{width: '100%', minHeight: '300px'}}>
            <Loader text="Loading Users"/>
          </div>
          :
          <div>
            <div className="panel">
              <h3 className="panel__heading">User</h3>
              <div className="panel__body">
                <UserDetail user={result[0]} />
              </div>
            </div>
          </div>
          }
        </main>
      </div>
    )
  }
}

User.propTypes = {
  api: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
  fetchResources: PropTypes.func.isRequired,
}

export default connect(state => (state), {loadUser, fetchResources})(User)
