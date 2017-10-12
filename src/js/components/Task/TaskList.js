import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TaskList extends Component {
  render() {
    const { tasks } = this.props
    return (
      <div>
        {tasks.length > 0 ? (
        <table className="table table--bordered">
        </table>
        ) : (
          <span>There is no data related with tasks table.</span>
        )}
      </div>
    )
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired 
}

export default TaskList
