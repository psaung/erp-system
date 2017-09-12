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
          <li className="nav__item nav__item--active"><Link to='/'><i className="ion-ios-home" /></Link></li>
          <li className="nav__item"><Link to='/employee'><i className="ion-ios-people" /></Link></li>
          <li className="nav__item"><Link to='/leave'><i className="ion-paper-airplane" /></Link></li>
          <li className="nav__item"><Link to='/department'><i className="ion-flag" /></Link></li>
          <li className="nav__item"><Link to='/user'><i className="ion-person" /></Link></li>
          <li className="nav__item"><Link to='/role'><i className="ion-network" /></Link></li>
          <li className="nav__item"><Link to='/finance'><i className="ion-ios-pricetags" /></Link></li>
          <li className="nav__item"><Link to='/setting'><i className="ion-android-settings" /></Link></li>
        </ul>
      </nav>
    )
  }
}

