import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class FinanceList extends Component {
  render() {
    const { finances } = this.props
    let salaryTotal = 0,
        bonusTotal = 0,
        penaltyTotal = 0,
        healthcareTotal = 0,
        transportationTotal = 0,
        financeTotal = 0
    if(finances.length > 0) {
      salaryTotal = finances.map( v => v.salary).reduce((k, p) => k+p, 0)
      bonusTotal = finances.map( v => v.bonus).reduce((k, p) => k+p, 0)
      penaltyTotal = finances.map( v => v.penalty).reduce((k, p) => k+p, 0)
      healthcareTotal = finances.map( v => v.healthcare).reduce((k, p) => k+p, 0)
      transportationTotal = finances.map( v => v.transportation).reduce((k, p) => k+p, 0)
      financeTotal = salaryTotal + bonusTotal + penaltyTotal + healthcareTotal + transportationTotal 
    }
    return (
      <div>
        {finances.length > 0 ? (
        <table className="table table--border">
          <thead>
            <tr className="heading">
              <th>#</th>
              <th>Employee</th>
              <th>Date</th>
              <th>Salary</th>
              <th>Bonus</th>
              <th>Penalty</th>
              <th>Health Care</th>
              <th>Transportation</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { finances.map((finance, id) =>
                <tr key={finance.id + ' finance' }>
                  <td>{id+1}</td>
                  <td>{finance.user.name}</td>
                  <td>{finance.date}</td>
                  <td>{finance.salary}</td>
                  <td>{finance.bonus}</td>
                  <td>{finance.penalty}</td>
                  <td>{finance.healthcare}</td>
                  <td>{finance.transportation}</td>
                  <td>{finance.salary + finance.bonus + finance.healthcare + finance.transportation + finance.penalty }</td>
                  <td><Link to={'/admin/finance/'+finance.id}>Details</Link></td>
                </tr>
            )}
            <tr style={{borderTop: '1px solid #6dbb70', color: '#6dbb70'}}>
              <td>{ ' ' }</td>
              <td>Summary</td>
              <td>Date</td>
              <td>{salaryTotal}</td>
              <td>{bonusTotal}</td>
              <td>{penaltyTotal}</td>
              <td>{healthcareTotal}</td>
              <td>{transportationTotal}</td>
              <td>{financeTotal}</td>
              <td>{ ' ' }</td>
            </tr>
          </tbody>
        </table>
        ) : (
          <span>There is no data related with tasks table.</span>
        )}
      </div>
    )
  }
}

FinanceList.propTypes = {
  finances: PropTypes.array.isRequired 
}

export default FinanceList 
