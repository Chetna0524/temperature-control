import React from 'react'

export default function Button(props) {
  return (
    <button className="btn-comm" onClick={props.onClick}>{props.children}</button>
  )
}
