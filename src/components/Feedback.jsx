import React from 'react'

function Feedback({ status, text}) {
  if(!status) {
    return null
  }
  return (
    <h3>{text}</h3>
  )
}

export default Feedback