import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
  constructor() {
    super()
  }
  
  render() {
    return(
      <nav className="l-nav">
        <h3 className="ta-center l-logo">Logo</h3>
        <ul className="nav">
          <li className="nav__item nav__item--active"><Link to='/admin'><i className="ion-ios-home" /></Link></li>
          <li className="nav__item"><Link to='/admin/employee'><i className="ion-ios-people" /></Link></li>
          <li className="nav__item"><Link to='/admin/leave'><i className="ion-paper-airplane" /></Link></li>
          <li className="nav__item"><Link to='/admin/department'><i className="ion-flag" /></Link></li>
          <li className="nav__item"><Link to='/admin/user'><i className="ion-person" /></Link></li>
          <li className="nav__item"><Link to='/admin/role'><i className="ion-network" /></Link></li>
          <li className="nav__item"><Link to='/admin/finance'><i className="ion-ios-pricetags" /></Link></li>
          <li className="nav__item"><Link to='/admin/setting'><i className="ion-android-settings" /></Link></li>
        </ul>
      </nav>
    )
  }
}

