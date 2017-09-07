import React, { Component } from 'react'

export default class Register extends Component {

  constructor() {
    super()
    this.register = this.register.bind(this)
  }

  register() {

  }

  render() {
    return(
      <form>
        <button onClick={this.register}>Register</button>
        <input type="reset" value="reset" />
      </form>
    )
  }
}
