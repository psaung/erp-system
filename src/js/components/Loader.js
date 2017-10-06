import React from 'react'

export default function Loader(props) {
  return (
    <div className="loader--arrowSector">
      <div className="loader--arrowSector__spinner">
        <div className="loader--arrowSector__arrow"></div>
        <div className="loader--arrowSector__arrow loader--arrowSector__arrow--d2"></div>
        <div className="loader--arrowSector__arrow loader--arrowSector__arrow--d3"></div>
        <div className="loader--arrowSector__arrow loader--arrowSector__arrow--d4"></div>
      </div>
      <span>{props.text || "Loading"}</span>
    </div>
  )
}
