import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

import { fetchResources } from './../actions/api-actions'
import { Header, Loader } from './../components'

class FinanceDetail extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    const { financeId } = this.props.match.params
    this.props.fetchResources('payrolls?id='+financeId)
  }

  render() {
    const { result, isFetching } = this.props.api
    const finance = result[0]
    return (
      <div>
        <Helmet>
          <title>Finance Detail</title>
        </Helmet>
        <Header heading="Finance Detail" />
        <main className="l-main">
          { isFetching ?
            <Loader text="Loading Finance" />
            :
            <div className="panel">
              <h3 className="panel__heading">{finance.date} Finance for { (finance && finance.user) ? finance.user.name : ' ' }</h3>
              <div className="panel__body">
                <Link to="/admin/finance" className="btn btn--material-success btn--rounded">Go Back to finance overview</Link>
                { result.length > 0 ?
                  <div style={{ marginTop: '20px' }}>
                    <ul className="finance-list">
                      <li>
                        <h3>FinanceId</h3>
                        <span>{finance.id}</span>
                      </li>
                      <li>
                        <h3>Employee Name</h3>
                        <span>{finance.user.name}</span>
                      </li>
                      <li>
                        <h3>Monthly Salary</h3>
                        <span>{finance.salary}</span>
                      </li>
                      <li>
                        <h3>Bonus</h3>
                        <span>{finance.bonus}</span>
                      </li>
                      <li>
                        <h3>Penalty</h3>
                        <span>{finance.penalty}</span>
                      </li>
                      <li>
                        <h3>Overtime</h3>
                        <span>{finance.overtime}</span>
                      </li>
                      <li>
                        <h3>Health care</h3>
                        <span>{finance.healthcare}</span>
                      </li>
                      <li>
                        <h3>Transportation</h3>
                        <span>{finance.transportation}</span>
                      </li>
                      <li>
                        <h3>Total</h3>
                        <span>{finance.salary + finance.overtime + finance.transportation + finance.healthcare + finance.bonus - finance.penalty}</span>
                      </li>
                    </ul>
                  </div>
                  :
                  <span>There is no data related with finance id {this.props.match.params.financeId}</span>
                }
              </div>
            </div>
          }
        </main>
      </div>
    )
  }
}

FinanceDetail.propTypes = {
  api: PropTypes.object.isRequired,
  fetchResources: PropTypes.func.isRequired,
}

export default connect(
  state => (state),
  { fetchResources },
)(FinanceDetail)
