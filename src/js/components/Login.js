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
    let username
    return(
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            ref={node => {
              username = node 
            }}
          />
        </div>
        <div className="form-group">
        </div>
        <button onClick={this.login}>login</button>
        <input type="reset" value="reset" />
      </form>
    )
  }
}
