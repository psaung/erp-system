import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TimeCardList extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
      { data.length > 0 ? 
        <ul>
          {data.map(frame => 
            <li key={frame.id} style={{borderBottom: '1px solid #ccc', paddingBottom: '10px'}}>
              {frame.user_id}
              <br />
              {frame.date}
              <br />
              {frame.in}
              <br />
              {frame.out}
            </li>
          )}
        </ul>
        :
        <div>
          There is no items
        </div>
      }
      </div>
    )
  }
}

TimeCardList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default TimeCardList;
