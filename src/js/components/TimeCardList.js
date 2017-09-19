import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { getAllTimeFrame }  from './../actions/time-actions'
import { connect } from 'react-redux'


class TimeCardList extends Component {
  render() {
    console.log(this.props)
    const { frames } = this.props
    return (
      <div>
      { frames.length > 0 && 
        <ul>
          {frames.map(frame => 
            <li key={frame.id}>
              {frame.name}
              {''}
              {frame.department}
              {''}
              {frame.id}
            </li>
          )}
        </ul>
      }
      </div>
    )
  }
}

TimeCardList.propTypes = {
  getAllTimeFrame: PropTypes.func
}

export default connect(
  state => (state),
  {getAllTimeFrame}
)(TimeCardList)
