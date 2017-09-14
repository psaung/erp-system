import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Nav, Header } from './../components'

class Dashboard extends Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div>
        <Header />
        <div className="panel">
          <h3 className="panel__heading">Application Log</h3>
          <tabel className="tabel tabel--border">
            <tr className="heading">
              <th>#</th>
              <th>Date</th>
              <th>Department</th>
              <th>Notification</th>
            </tr>
            <tr>
              <td>1</td>
              <td>2017/08/06</td>
              <td>Department</td>
              <td>Notification</td>
            </tr>
            <tr>
              <td>2</td>
              <td>2017/08/07</td>
              <td>Department</td>
              <td>Notification</td>
            </tr>
            <tr>
              <td>3</td>
              <td>2017/08/06</td>
              <td>Department</td>
              <td>Notification</td>
            </tr>
          </tabel>
        </div>
      </div>
    )
  }
}

export default Dashboard
