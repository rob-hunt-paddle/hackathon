import React from 'react'
import Switch from '@material-ui/core/Switch';

const radio = ({ labelName, toggleSwitch, toggleStatus }) => (
  <div>
    <label className="labelName"> {labelName} </label>
    <Switch
      onClick={toggleSwitch}
      on={toggleStatus}
    />
  </div>
)

export default radio
