import React from 'react'

export default function TempDisplay(props) {
  return (
    <>
      <div className="temp-display">
        <h2 className='temp-heading'>{props.counter}<sup>0</sup>C</h2>
      </div>
    </>
  )
}
