import React from 'react'
import PropTypes from 'prop-types'

const UserFinance = props => (
  <div>
    <table className="table table--border">
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Salary</th>
          <th>Penalty</th>
          <th>Transportation</th>
          <th>Overtime</th>
          <th>Medical</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        { props.payrolls.length > 0 && 
          props.payrolls.map( (v, k) =>
            <tr key={"kky " + v.id}>
              <td>{k+1}</td>
              <td>{v.date}</td>
              <td>{v.salary}</td>
              <td>{v.penalty}</td>
              <td>{v.transportation}</td>
              <td>{v.overtime}</td>
              <td>{v.healthcare}</td>
              <td>{ v.salary + v.bonus + v.transportation + v.overtime + v.healthcare - v.penalty }</td>
            </tr>
          )
        }
      </tbody>
    </table>
  </div>
)

export default UserFinance
