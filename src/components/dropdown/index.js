import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateTheme } from '../../redux/action-creators/updateTheme'
import { updateLocale } from '../../redux/action-creators/updateLocale'
// import './index.css'

const Dropdown = ({ labelName, updateLocale, updateTheme }) => {
  return(
    <div className="groupContainer">
      <div> <h6> Group </h6> </div>
      <div className="innerGroupContainer">
        <label className="labelName"> {labelName} </label>
        {labelName === 'Locale' ?
          <select onChange={(e) => updateLocale(e.target.value)}>
            <option value="en">English</option>
            <option value="ru">Russian</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
          :
          <select onChange={(e) => updateTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        }

      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ updateTheme, updateLocale }, dispatch)

export default connect(null, mapDispatchToProps)(Dropdown)
