import React from 'react'
import Task from './Tasks'

function AllDisplay() {

  return (
    <div>
      <h2>All</h2>
      <Task isActive = {true}></Task>
      <Task isActive = {false}></Task>
    </div>
  )
}

export default AllDisplay
