import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserList extends Component {
  render() {
    const { users } = this.props
    return (
      <div>
        {users.length > 0 ? (
        <table className="table table--bordered">
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
