import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Filter from './Filter'

class Header extends Component {
  constructor() {
    super()
  } 

  render() {
    return(
      <div className="l-header">
        { /* user setting */ }
        { /* TODO: breadcrumbs here */ }
        <div className="l-header__setting">
          <i className="ion-person" />
        </div>
        <div className="l-header__overview">
          <h3 className="l-header__heading">Dashboard</h3>
          <h3>Dashboard Overview</h3>
        </div>
        { /* TODO: filter list */ }
        <Filter />
      </div>
    )
  }
}

export default Header
