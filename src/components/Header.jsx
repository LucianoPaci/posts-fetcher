import React from 'react'
import { MAX_LIMIT, MIN_LIMIT } from '../constants'


function Header({ limit, onSetLimit}) {
  return (
    <header className="input-container">
        <label>Number of items to fetch</label>
        <span>Min: {MIN_LIMIT} | Max: {MAX_LIMIT}</span>
        <input
          type={'number'}
          value={limit}
          min={MIN_LIMIT}
          max={MAX_LIMIT}
          onChange={(e) => {
           if(e.target.value >= MIN_LIMIT && e.target.value <= MAX_LIMIT) {
            onSetLimit(e.target.value)
           } 
          }}
        />
      </header>
  )
}

export default Header