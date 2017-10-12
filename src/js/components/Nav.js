import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Nav extends Component {
  constructor() {
    super()
  }
  
  render() {
    const { location } = this.props
    return(
      <nav className="l-nav">
        <h3 className="ta-center l-logo">Logo</h3>
        <ul className="nav">
          <li className={`nav__item ${location.pathname === "/admin" ? "nav__item--active" : ""}`}>
            <Link to='/admin'><i className="ion-ios-home" /></Link>
          </li>
          <li className={`nav__item ${location.pathname === "/admin/timecard" ? "nav__item--active" : ""}`}>
            <Link to='/admin/timecard'><i className="ion-ios-people" /></Link>
          </li>
          <li className={`nav__item ${location.pathname === "/admin/leave" ? "nav__item--active" : ""}`}>
            <Link to='/admin/leave'><i className="ion-paper-airplane" /></Link>
          </li>
          <li className={`nav__item ${location.pathname === "/admin/department" ? "nav__item--active" : ""}`}>
            <Link to='/admin/department'><i className="ion-flag" /></Link>
          </li>
          <li className={`nav__item ${location.pathname === "/admin/user" ? "nav__item--active" : ""}`}>
            <Link to='/admin/user'><i className="ion-person" /></Link>
          </li>
          <li className={`nav__item ${location.pathname === "/admin/task" ? "nav__item--active" : ""}`}>
            <Link to='/admin/task'><i className="ion-network" /></Link>
          </li>
          <li className={`nav__item ${location.pathname === "/admin/finance" ? "nav__item--active" : ""}`}>
            <Link to='/admin/finance'><i className="ion-ios-pricetags" /></Link>
          </li>
          <li className={`nav__item ${location.pathname === "/admin/setting" ? "nav__item--active" : ""}`}>
            <Link to='/admin/setting'><i className="ion-android-settings" /></Link>
          </li>
        </ul>
      </nav>
    )
  }
}

Nav.propTypes = {
  location: PropTypes.object.isRequired
}

export default Nav
