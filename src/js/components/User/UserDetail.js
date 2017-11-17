import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import UserFinance from './UserFinance'
import UserLeave from './UserLeave'
import UserLeaveLogs from './UserLeaveLogs'
import UserTask from './UserTask'

class UserDetail extends Component {
  render() {
    console.log(this.props);
    return(
      <div>
        <div style={{ borderBottom: '1px solid #eee', padding: '10px 0px', margin: '10px 0px' }}>
          <h3 style={{ marginBottom: '10px', color: 'green' }}>UserDetail</h3>
          <div>Name: {this.props.user.name}</div>
          <div>Email: {this.props.user.email}</div>
          <div>Role: {this.props.user.role}</div>
          <div>Salary: {this.props.user.salaries[0].salary}</div>
          <div>Total Causual Leave: {this.props.user.leave.paid}</div>
          <div>Total Medical Leave: {this.props.user.leave.medical}</div>
        </div>
        <h3 style={{ marginBottom: '10px', color: 'green' }}>Payrolls</h3>
        <UserFinance payrolls={this.props.user.payrolls} /> 
        <h3 style={{ margin: '10px 0px', color: 'green' }}>Leave Logs</h3>
        <UserLeaveLogs logs={this.props.user.leavelogs} />
        <h3 style={{ margin: '10px 0px', color: 'green' }}>Tasks</h3>
        <UserTask logs={this.props.user.tasks} />
      </div>
    )
  }
}

UserDetail.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserDetail
