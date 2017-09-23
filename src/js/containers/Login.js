import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import * as authActions from './../actions/auth-actions'

class Login extends Component {

  constructor() {
    super()
    this.login = this.login.bind(this)
  }

  componentWillReceiveProps(newProps) {
    if(newProps.auth) {
      if(newProps.auth.isAuthenticated && newProps.auth.role === "admin") {
        newProps.history.push('/admin/');
      }
    }
  }

  login(username, password) {
    this.props.requestLogin({
      username,
      password,
    })
  }

  render() {
    let username, password
    console.log(this.props)
    return(
      <div className="flex-centered-container l-auth">
        <div className="auth-form">
          <h3 className="auth-form__heading">Sign In</h3>
          <form>
            <div className="form-group">
              <label htmlFor="username" className="auth-form__label">Username</label>
              <input
                type="text"
                name="username"
                className="auth-form__input"
                ref={node => {
                  username = node 
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="auth-form__label">Password</label>
              <input
                type="password"
                name="password"
                className="auth-form__input"
                ref={node => {
                  password= node 
                }}
              />
            </div>
            <div className="form-group">
            </div>
            <button onClick={ e=> {
              e.preventDefault();
              this.login(username.value, password.value)
              username.value = ""
              password.value = ""
            }} className="btn btn--success btn--rounded">Login</button>
            <input type="reset" value="Cancel" className="btn btn--warning btn--rounded"/>
          </form>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  requestLogin: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}

export default connect(
  state => (state),
  authActions,
)(Login)
