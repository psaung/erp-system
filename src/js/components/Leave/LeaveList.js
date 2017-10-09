import React from 'react'
import LeaveItem from './LeaveItem'

export default function LeaveList(props) {
  const { data } = props;
  return (
    <div className="">
      { data.length > 0 ? 
      <ul>
        <LeaveItem data={data} />
      </ul>
      : 
      <h3>There is no items</h3>
      }
    </div>
  )
}
