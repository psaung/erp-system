import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchResources } from './../actions/api-actions'
import { Header, Loader } from './../components'

class Finance extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    this.props.fetchResources('payrolls')
  }

  render() {
    const { result, isFetching } = this.props.api
    return (
      <div>
        <Helmet>
          <title>Finance</title>
        </Helmet>
        <Header heading="Finance" />
        <main className="l-main">
          { isFetching ? 
            <Loader text="Loading finance" />
            : 
            <div className="panel">
              <h3 className="panel__heading">Finance</h3>
              <div className="panel__body">
              </div>
            </div>
          }
        </main>
      </div>
    ) 
  }
}

Finance.propTypes = {
  api: PropTypes.object.isRequired,
  fetchResources: PropTypes.func.isRequired,
}

export default connect(
  state => (state),
  { fetchResources }
)(Finance)
