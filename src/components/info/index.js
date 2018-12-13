import React from 'react'
import ReactTooltip from 'react-tooltip'
import { findDOMNode } from 'react-dom'
import './index.css'

const info = ({labelName, tooltipText}) => (
  <div data-tip="tooltip" data-type="info" data-place="left" data-for={labelName.replace(/\s/g, '')+"Tooltip"} className="info-icon">
    <ReactTooltip id={labelName.replace(/\s/g, '')+"Tooltip"}>
      <p>{tooltipText}</p>
    </ReactTooltip>
  </div>
)

export default info