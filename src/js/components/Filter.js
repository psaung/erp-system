import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Filter extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div className="l-filter">
        <span className="l-filter__heading">Filter</span>
        <i className="ion-android-options l-filter__budge" />
          <input className="l-filter__input" placeholder="Type something to filter" name="filter" required/>
          <input type="submit" value="filter" className="btn btn--info btn--rounded l-filter__submit" />
      </div>
    )
  }
}

export default Filter
