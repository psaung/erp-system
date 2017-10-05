import React, { Component } from 'react'
import PropTypes from 'prop-types' 
import { connect } from 'react-redux'
import { checkAuth } from './../actions/auth-actions'

import {
  AdminPanel,
  UnAuthorize,
} from './index'

class AdminRoot extends Component {
  constructor() {
    super()
  }
  
  componentWillReceiveProps(nextProps) {
 
  }

  componentWillMount() {
    if(!this.props.auth.isAuthenticated) {
      this.props.checkAuth() 
    }
  }

  render() {
    let { auth } = this.props
    console.log(this.props)
    return (
      <div>
        { this.renderMyComponent(auth.isAuthenticated) }
      </div>
    )
  }

  renderMyComponent(authorized) {
    if(authorized) {
      return <AdminPanel history={this.props.history}/>      
    } else {
      return <UnAuthorize />
    }
  }
}

AdminRoot.propTypes = {
  checkAuth: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default connect(
  state => (state),
  { checkAuth },
)(AdminRoot)

