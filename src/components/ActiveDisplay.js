import React from 'react'
import Tasks from './Tasks';

function ActiveDisplay() {
  return (
    <div>
      <h2>Active</h2>
    <Tasks isActive = {true}></Tasks>
    </div>
  )
}

export default ActiveDisplay
