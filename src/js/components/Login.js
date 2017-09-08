import React, { Component } from 'react'

export default class Login extends Component {

  constructor() {
    super()
    this.login = this.login.bind(this)
  }

  login(e) {
    e.preventDefault()
  }

  render() {
    let username, password
    return(
      <div className="auth-form-control">
        <h3 className="auth-form-control__heading">Sign In</h3>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="auth-form-control__input"
              ref={node => {
                username = node 
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="auth-form-control__input"
              ref={node => {
                password= node 
              }}
            />
          </div>
          <div className="form-group">
          </div>
          <button onClick={this.login} className="auth-form-control__submit">Login</button>
          <input type="reset" value="Cancel" className="auth-form-control__reset"/>
        </form>
      </div>
    )
  }
}
