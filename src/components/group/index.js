import React from 'react'
import './index.css'

const group = ({groupName, children}) => (
  <div className="groupContainer">
    <h6> {groupName} </h6>
    {children}
  </div>
)

export default group
