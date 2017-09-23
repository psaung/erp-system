import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { 
  Header,
  DepartmentList,
  DepartmentForm,
} from './../components'

class Department extends Component {
  constructor() {
    super()
  }

  render() {
    const { api } = this.props
    return (
      <div>
        <Helmet>
          <title>Department</title>
        </Helmet>
        <Header heading="Department" />
        <main className="l-main">
          <div className="panel">
            <h3 className="panel__heading">Department</h3>
            <div className="panel__body">
              <DepartmentList departments={api}/>
            </div>
          </div>
          <DepartmentForm />
        </main>
      </div>
    ) 
  }
}

Department.propTypes = {
  api: PropTypes.array.isRequired
}

export default connect(
  state => (state)
)(Department)
