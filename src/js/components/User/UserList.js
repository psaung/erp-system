import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class UserList extends Component {
  render() {
    const { users } = this.props
    return (
      <div>
        {users.length > 0 ? (
        <table className="table table--border">
          <thead>
            <tr className="heading">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Department</th>
              <th>Causal</th>
              <th>Medical</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          { users.map((user, id) =>
            <tr key={user.id + 'user'}>
              <td>{id + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.departments[0] &&
              user.departments[0].name}</td>
              <td>{user.leave.paid}</td>
              <td>{user.leave.medical}</td>
              <td><Link to={"/admin/user/"+user.id}>Detail</Link></td>
            </tr>
            )}
          </tbody>
        </table>
        ) : (
          <span>There is no data related with users table.</span>
        )}
      </div>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired 
}

export default UserList 
