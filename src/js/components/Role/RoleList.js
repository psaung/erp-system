import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RoleList extends Component {
  render() {
    const { roles } = this.props
    return (
      <div>
        {roles.length > 0 ? (
        <table className="table table--bordered">
        </table>
        ) : (
          <span>There is no data related with roles table.</span>
        )}
      </div>
    )
  }
}

RoleList.propTypes = {
  roles: PropTypes.array.isRequired 
}

export default RoleList
