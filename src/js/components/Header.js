import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  constructor() {
    super()
  } 

  render() {
    return(
      <div className="l-header">
        { /* user setting */ }
        { /* TODO: breadcrumbs here */ }
        <h3 className="l-header__heading">Dashboard</h3>
        { /* TODO: filter list */ }
      </div>
    )
  }
}

export default Header
