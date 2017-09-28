import React, { Component } from 'react'
import { StaggeredMotion, Motion, spring } from 'react-motion'
import PropTypes from 'prop-types'

class Toastr extends Component {
  constructor() {
    super()
    this.state = {
      show: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.show) {
      this.setState({
        show: true
      })
      window.setTimeout(function() {
        console.log(this)
        this.setState({ show: false })
      }.bind(this), 3000)
    }
  }

  setStyle() {
    return {
      x: spring(60)
    }
  }

  render() {
    const { message, modifier } = this.props.error
    return(
      <Motion style={{ x: spring(this.state.show ? 40 : 0) }} >
      { value => {
        return (
          <div className="toastr toastr--danger" style={{ height: value.x + "px" }}>
            <div style={{ padding: '10px' }}>
              {message}
            </div>
          </div>
        )
      }}
      </Motion>
    )
  }
}

Toastr.propTypes = {
  message: PropTypes.string,
  modifier: PropTypes.string
}

export default Toastr
