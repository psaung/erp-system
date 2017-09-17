import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RoleForm extends Component {
  render() {
    return(
      <div className="panel panel--material">
        <h3 className="panel__heading">Create Role</h3>
        <div className="panel__body">
          <form className="material-form">
            <div className="material-form__group"> 
              <input
                type="text"
                className="material-form__input"
                name="role"
								id="role"
                required />
              <label htmlFor="role" className="material-form__label">Role Name</label>
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

RoleForm.propTypes = {

}

export default RoleForm 
