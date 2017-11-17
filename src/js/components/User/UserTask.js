import React from 'react'
import PropTypes from 'prop-types'

const UserFinance = props => (
  <div>
    <table className="table table--border">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Percentage</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        { props.logs.length > 0 && 
          props.logs.map( (v, k) =>
            <tr key={"kky " + v.id}>
              <td>{k+1}</td>
              <td>{v.name}</td>
              <td>{v.description}</td>
              <td>{v.start_date}</td>
              <td>{v.end_date}</td>
              <td>{v.percentage}</td>
              <td>{v.status}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
)

export default UserFinance
