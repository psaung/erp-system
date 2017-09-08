import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FlashMessage extends Component {
  constructor() {
    super()
    this.showMessage = this.showMessage.bind(this)
    this.setState({
      message: '' 
    })
  }

  showMessage() {

  }

  render() {
    return(
      <div className="flash-message">
      </div>
    )
  }
}

FlashMessage.propTypes = {
  fireMessage: PropTypes.func,
  showMessage: PropTypes.string
}

export default FlashMessage
