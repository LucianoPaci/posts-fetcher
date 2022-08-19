import React from 'react'

function DisplayError({ error }) {
  if (!error) {
    return null
  }
  return (
    <div>
      <h2>There was an error</h2>
      <code>{JSON.stringify(error)}</code>
    </div>
  )
}

export default DisplayError
