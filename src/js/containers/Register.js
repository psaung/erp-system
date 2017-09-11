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
      <div className="">
        <div className="auth-form">
          <h3 className="auth-form__heading">Sign Up</h3>
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
              <label htmlFor="password" className="auth-form__label">Confirm</label>
              <input
                type="password"
                name="confirm-password"
                className="auth-form__input"
                ref={node => {
                  confirmPassword = node 
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="department" className="auth-form__label">Department</label>
              <input
                type="text"
                name="department"
                className="auth-form__input"
                ref={node => {
                  department = node 
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position" className="auth-form__label">Position</label>
              <input
                type="text"
                name="position"
                className="auth-form__input"
                ref={node => {
                  position = node 
                }}
              />
            </div>
            <button onClick={this.login} className="btn btn--success btn--rounded">Login</button>
            <input type="reset" value="Cancel" className="btn btn--warning btn--rounded"/>
          </form>
        </div>
      </div>
    )
  }
}
