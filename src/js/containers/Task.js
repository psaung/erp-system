import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { fetchResources } from './../actions/api-actions'
import {
	Header,
	TaskList,
	TaskForm,
  Loader,
} from './../components'

class Task extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    this.props.fetchResources('tasks');
  }

  render() {
    const { result, isFetching } = this.props.api
    return (
      <div>
        <Helmet>
          <title>Task</title>
        </Helmet>
        <Header heading="Task" />
        <main className="l-main">
          { isFetching ?
            <Loader text="Loading task" />
            :
            <div>
              <div className="panel">
                <h3 className="panel__heading">Task</h3>
                <div className="panel__body">
                  <TaskList tasks={result}/>
                </div>
              </div>
              <TaskForm />
            </div>
          }
        </main>
      </div>
    )
  }
}

Task.propTypes = {
  api: PropTypes.object.isRequired,
  fetchResources: PropTypes.func.isRequired,
}

export default connect(
  state => (state),
  { fetchResources }
)(Task)
