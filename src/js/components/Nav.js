import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
  constructor() {
    super()
  }
  
  render() {
    return(
      <nav className="l-nav">
        <ul className="nav">
          <li className="nav__item"><Link to='/'>Dashboard</Link></li>
          <li className="nav__item"><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
    )
  }
}

