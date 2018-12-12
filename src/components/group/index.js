import React from 'react'
import './index.css'

const Group = ({ labelName }) => {
  return(
    <div className="groupContainer">
      <div> <h6> Group </h6> </div>
      <div className="innerGroupContainer">
        <label className="labelName"> {labelName} </label>
        <input />
      </div>
    </div>
  )
}

export default Group
