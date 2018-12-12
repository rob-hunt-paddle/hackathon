import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateTheme } from '../../redux/action-creators/updateTheme'
import { updateLocale } from '../../redux/action-creators/updateLocale'
import ReactTooltip from 'react-tooltip'
import { findDOMNode } from 'react-dom'
import './index.css'

class Dropdown extends React.Component {

  state = {
    greyOutContainer: true,

  }

  greyOutContainer = () => {
    this.setState({greyOutContainer: !this.state.greyOutContainer})
  }
  render(){
    const { labelName, updateLocale, updateTheme, checkoutConfig } = this.props
    return (
      <div className={`dropdownContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
        <input
          type="checkbox"
          onChange={this.greyOutContainer}
        />
        <label className="labelName"> {labelName} </label>
        {labelName === 'Locale' ?
          <div className='inputGroup'>
            <select onChange={(e) => updateLocale(e.target.value)}>
              <option selected={'en' === checkoutConfig.locale} value="en">English</option>
              <option selected={'ru' === checkoutConfig.locale} value="ru">Russian</option>
              <option selected={'de' === checkoutConfig.locale} value="de">German</option>
              <option selected={'fr' === checkoutConfig.locale} value="fr">French</option>
            </select>
            <div data-tip="tooltip" data-type="info" data-place="left" data-for={labelName+"Tooltip"} className="info-icon">
              <ReactTooltip id={labelName+"Tooltip"}>
                <p>Locale tooltip</p>
              </ReactTooltip>
            </div>
          </div>  
          :
          <div className='inputGroup'>
            <select onChange={(e) => updateTheme(e.target.value)}>
              <option selected={'light' === checkoutConfig.display_mode_theme} value="light">Light</option>
              <option selected={'dark' === checkoutConfig.display_mode_theme} value="dark">Dark</option>
            </select>
            <div data-tip="tooltip" data-type="info" data-place="left" data-for={labelName+"Tooltip"} className="info-icon">
              <ReactTooltip id={labelName+"Tooltip"}>
                <p>Theme tooltip</p>
              </ReactTooltip>
            </div>
          </div>  
        }
      </div>
    )
  }
}

const mapStateToProps = ({ checkoutConfig }) => ({
    checkoutConfig,
})

const mapDispatchToProps = dispatch => bindActionCreators({ updateTheme, updateLocale }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
