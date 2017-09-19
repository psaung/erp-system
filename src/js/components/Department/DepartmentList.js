import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DepartmentList extends Component {
  render() {
    const { departments } = this.props
    return (
      <div>
        {departments.length > 0 ? (
        <table className="table table--border">
          <thead>
            <tr className="heading">
              <th>#</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          { departments.map((department, id) =>
            <tr key={department.id}>
              <td>{id + 1}</td>
              <td>{department.name}</td>
              <td>Action</td>
            </tr>
          )}
          </tbody>
        </table>
        ) : (
          <span>There is no data related with departments table.</span>
        )}
      </div>
    )
  }
}

DepartmentList.propTypes = {
  departments: PropTypes.array.isRequired 
}

export default DepartmentList
