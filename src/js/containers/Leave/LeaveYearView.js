import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchResources } from './../../actions/api-actions'
import {
	Header,
	LeaveCalendar,
  Loader,
} from './../../components'

class LeaveYearView extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    this.props.fetchResources('leavelogs')
  }

  render() {
    const { result, isFetching } = this.props.api
    const mockArr = Array.from(Array(12).keys()).map(x => x + 1);
    const year = new Date().getFullYear()
    let dateArray = []
    let dateObj = {}
    console.log(result)
    if(result.length > 0) {
      dateArray = result.map(v => {
        const dat = new Date(v.time).getMonth() + 1
        dateObj[dat] = dateObj[dat] ? dateObj[dat] : {};
        if(v.period === "half day") {
          dateObj[dat].half = dateObj[dat].half ? dateObj[dat].half + 1 : 1 
        } else {
          dateObj[dat].full = dateObj[dat].full ? dateObj[dat].full + 1 : 1 
        }
        return dat 
      })
      console.log(dateObj)
    }

    return (
      <div>
        <Helmet>
          <title>Leave</title>
        </Helmet>
        <Header heading="Leave" />
        <main className="l-main">
          { isFetching ?
            <Loader text="Loading leave" />
            :
            <div className="panel">
              <h3 className="panel__heading">Leave Panel</h3>
              <div className="panel__body">
                <h3 className="ta-center">{year}</h3>
                <div className="grid">
                  { mockArr.map( v => <LeaveCalendar month={v} year={year} key={`yearmonth${v}`} half={(dateObj[v] && dateObj[v].half) ? dateObj[v].half : 'N/A'} full={(dateObj[v] && dateObj[v].full) ? dateObj[v].full : 'N/A'}/> ) }
                </div>
              </div>
            </div>
          }
        </main>
      </div>
    ) 
  }
}

LeaveYearView.propTypes = {
  api: PropTypes.object.isRequired,
  fetchResources: PropTypes.func.isRequired,
}

export default connect(
  state => (state),
  { fetchResources }
)(LeaveYearView)
