import React, { Component } from 'react'
import PropTypes from 'prop-types'

class DepartmentForm extends Component {
  render() {
    return(
      <div className="panel panel--material">
        <h3 className="panel__heading">Create Department</h3>
        <div className="panel__body">
          <form className="material-form">
            <div className="material-form__group"> 
              <input
                type="text"
                className="material-form__input"
                name="department"
								id="department"
                required />
              <label htmlFor="department" className="material-form__label">Department Name</label>
            </div>
            <div className="material-form__action">
              <input type="submit" value="submit" className="btn btn--material-success btn--rounded"/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

DepartmentForm.propTypes = {

}

export default DepartmentForm
