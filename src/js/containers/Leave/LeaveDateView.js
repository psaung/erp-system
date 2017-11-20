import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchResources, fetchResourcesMultiple } from './../../actions/api-actions'
import {
	Header,
	LeaveCalendar,
  Loader,
} from './../../components'

class LeaveDateView extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    const { params } = this.props.match
    let day = params.date + ""
    let month = params.month + ""
    if(day.length <= 1) day = "0" + day
    if(month.length <= 1) month = "0" + month 
    //this.props.fetchResources('leavelogs?daymonth='+day+'-'+month)
    this.props.fetchResourcesMultiple({
      leaveLogs: 'leavelogs?daymonth='+day+'-'+month,
      users: 'users'
    })
  }

  render() {
    const { result, isFetching } = this.props.api
    console.log(this.props.api)
    const { params } = this.props.match
    const year = new Date().getFullYear()
    return (
      <div>
        <Helmet>
          <title>Leave Date View</title>
        </Helmet>
        <Header heading="Leave" />
        <main className="l-main">
          { isFetching ?
            <Loader text="Loading leave" />
            :
            <div className="panel">
              <h3 className="panel__heading">Leave Panel</h3>
              <div className="panel__body">
                <h3>{params.date}/{params.month}/{year}</h3>
                <div className="grid">
                  { result.leaveLogs && result.leaveLogs.length > 0 &&
                    result.leaveLogs.map( v => <div key={v.id+'user'}>
                      {v.user.name} took {v.period}. 
                    </div>)
                  }
                </div>
              </div>
            </div>
          }
        </main>
      </div>
    ) 
  }
}

LeaveDateView.propTypes = {
  api: PropTypes.object.isRequired,
  fetchResources: PropTypes.func.isRequired,
}

export default connect(
  state => (state),
  { fetchResources, fetchResourcesMultiple }
)(LeaveDateView)
