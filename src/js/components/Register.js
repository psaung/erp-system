import React, { Component } from 'react'

export default class Register extends Component {

  constructor() {
    super()
    this.login = this.login.bind(this)
  }

  login(e) {
    e.preventDefault()
  }

  render() {
    let username, password, confirmPassword, position, department
    return(
      <div className="auth-form-control">
        <h3 className="auth-form-control__heading">Sign Up</h3>
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
            <label htmlFor="password">Confirm</label>
            <input
              type="password"
              name="confirm-password"
              className="auth-form-control__input"
              ref={node => {
                confirmPassword = node 
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              name="department"
              className="auth-form-control__input"
              ref={node => {
                department = node 
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              className="auth-form-control__input"
              ref={node => {
                position = node 
              }}
            />
          </div>
          <button onClick={this.login} className="auth-form-control__submit">Login</button>
          <input type="reset" value="Cancel" className="auth-form-control__reset"/>
        </form>
      </div>
    )
  }
}
