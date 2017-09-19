import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
  render() {
    return(
      <div className="panel panel--material">
        <h3 className="panel__heading">Create User</h3>
        <div className="panel__body">
          <form className="material-form">
            <div className="material-form__group"> 
              <input
                type="text"
                className="material-form__input"
                name="username"
								id="username"
                required />
              <label htmlFor="username" className="material-form__label">User Name</label>
            </div>
            <div className="material-form__group"> 
              <input
                type="text"
                className="material-form__input"
                name="department"
								id="department"
                required />
              <label htmlFor="department" className="material-form__label">Department</label>
            </div>
            <div className="material-form__group"> 
              <input
                type="text"
                className="material-form__input"
                name="role"
								id="role"
                required />
              <label htmlFor="role" className="material-form__label">Role</label>
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

UserForm.propTypes = {

}

export default UserForm 
