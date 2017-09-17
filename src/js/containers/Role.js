import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { connect } from 'react-redux'
import {
	Header,
	RoleList,
	RoleForm,
} from './../components'

class Role extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Role</title>
        </Helmet>
        <Header heading="Role" />
        <div className="panel">
          <h3 className="panel__heading">Role</h3>
          <div className="panel__body">
						<RoleList roles={[]}/>
          </div>
        </div>
				<RoleForm />
      </div>
    )
  }
}

export default Role 
