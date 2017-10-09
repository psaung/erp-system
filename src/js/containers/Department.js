import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchResources } from './../actions/api-actions'
import { 
  Header,
  DepartmentList,
  DepartmentForm,
  Loader,
} from './../components'

class Department extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    this.props.fetchResources('departments')
  }

  render() {
    const { result, isFetching } = this.props.api
    return (
      <div>
        <Helmet>
          <title>Department</title>
        </Helmet>
        <Header heading="Department" />
        <main className="l-main">
          { isFetching ? 
          <Loader text="Loading Departments" />
          :
            <div>
              <div className="panel">
                <h3 className="panel__heading">Department</h3>
                <div className="panel__body">
                  <DepartmentList departments={result}/>
                </div>
              </div>
              <DepartmentForm />
            </div>
          } 
        </main>
      </div>
    ) 
  }
}

Department.propTypes = {
  api: PropTypes.object.isRequired,
  fetchResources: PropTypes.func.isRequired,
}

export default connect(
  state => (state),
  { fetchResources }
)(Department)
