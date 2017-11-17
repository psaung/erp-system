import React from 'react'
import PropTypes from 'prop-types'

const UserFinance = props => (
  <div>
    <table className="table table--border">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Type</th>
          <th>Reason</th>
          <th>period</th>
        </tr>
      </thead>
      <tbody>
        { props.logs.length > 0 && 
          props.logs.map( (v, k) =>
            <tr key={"kky " + v.id}>
              <td>{k+1}</td>
              <td>{v.time}</td>
              <td>{v.type}</td>
              <td>{v.reason}</td>
              <td>{v.period}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
)

export default UserFinance
