import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DepartmentList extends Component {
  render() {
    const { departments } = this.props
    return (
      <div>
        {departments.length > 0 ? (
        <table className="table table--bordered">
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
