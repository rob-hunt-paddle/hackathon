import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateTheme } from '../../redux/action-creators/updateTheme'
import { updateLocale } from '../../redux/action-creators/updateLocale'
import ReactTooltip from 'react-tooltip'
import { findDOMNode } from 'react-dom'

// import './index.css'

const Dropdown = ({ labelName, updateLocale, updateTheme, checkoutConfig }) => {
  return(
    <div className="groupContainer">
      <div> <h6> Group </h6> </div>
      <div className="innerGroupContainer">
        <label className="labelName"> {labelName} </label>
        {labelName === 'Locale' ? 
          <div className="inputGroup">
            <select onChange={(e) => updateLocale(e.target.value)}>
              <option selected={'en' === checkoutConfig.locale} value="en">English</option>
              <option selected={'ru' === checkoutConfig.locale} value="ru">Russian</option>
              <option selected={'de' === checkoutConfig.locale} value="de">German</option>
              <option selected={'fr' === checkoutConfig.locale} value="fr">French</option>
            </select>
            <div data-tip="tooltip" data-event="click" className="info-icon">
              <ReactTooltip>
                <p>Tooltip text</p>
              </ReactTooltip>

            </div>
          </div>
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

const mapStateToProps = ({ checkoutConfig }) => ({
    checkoutConfig,
})

const mapDispatchToProps = dispatch => bindActionCreators({ updateTheme, updateLocale }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
