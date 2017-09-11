import React, { Component } from 'react'

/* eslint-diable no-unused-vars */
class App extends Component {
  render() {
    const { children } = this.props
    return (
      <div className="container">
        { children } 
      </div>
    )
  }
}

export default App
