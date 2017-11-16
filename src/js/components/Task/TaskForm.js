import React, { Component } from 'react'
import PropTypes from 'prop-types'

class RoleForm extends Component {
  render() {
    return(
      <div className="panel panel--material">
        <h3 className="panel__heading">Create Task</h3>
        <div className="panel__body">
          <form className="material-form">
            <div className="material-form__group"> 
              <input
                type="text"
                className="material-form__input"
                name="name"
								id="name"
                required />
              <label htmlFor="role" className="material-form__label">Task Name</label>
            </div>

            <div className="material-form__group"> 
              <input
                type="text"
                className="material-form__input"
                name="description"
								id="description"
                required />
              <label htmlFor="description" className="material-form__label">Task Description</label>
            </div>

            <div className="material-form__group"> 
              <input
                type="text"
                className="material-form__input"
                name="user_id"
								id="user_id"
                required />
              <label htmlFor="user_id" className="material-form__label">User Id</label>
            </div>

            <div className="material-form__group"> 
              <input
                type="text"
                className="material-form__input"
                name="start_date"
								id="start_date"
                required />
              <label htmlFor="starte_date" className="material-form__label">Start Date</label>
            </div>

            <div className="material-form__group"> 
              <input
                type="text"
                className="material-form__input"
                name="end_date"
								id="end_date"
                required />
              <label htmlFor="end_date" className="material-form__label">End Date</label>
            </div>

            <div className="material-form__group"> 
              <input
                type="text"
                className="material-form__input"
                name="percentage"
								id="percentage"
                required />
              <label htmlFor="percentage" className="material-form__label">Percentage</label>
            </div>


            <div className="material-form__group"> 
              <input
                type="text"
                className="material-form__input"
                name="status"
								id="status"
                required />
              <label htmlFor="percentage" className="material-form__label">Status</label>
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
