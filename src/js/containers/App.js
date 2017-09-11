import React, { Component } from 'react'

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
