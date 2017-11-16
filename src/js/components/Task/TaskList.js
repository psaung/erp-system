import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class TaskList extends Component {
  render() {
    const { tasks } = this.props
    console.log(tasks);
    return (
      <div>
        {tasks.length > 0 ? (
        <table className="table table--border">
          <thead>
            <tr className="heading">
              <th>#</th>
              <th>Task Name</th>
              <th>Description</th>
              <th>User Id</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Percentage</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { tasks.map((task, id) =>
              <tr key={task.id + ' task' }>
                <td>{id+1}</td>
                <td>{task.name}</td>
                <td>{task.description.substr(0, 10)}</td>
                <td>{task.user_id}</td>
                <td>{task.start_date}</td>
                <td>{task.end_date}</td>
                <td>{task.percentage}</td>
                <td>{task.status}</td>
                <td>
                  <Link to={'/admin/task/'+task.id} >View Detail</Link>
                </td>
              </tr>
            )}
          </tbody>
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
