import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Info from '../info'

import { updateTheme } from '../../redux/action-creators/updateTheme'
import { updateLocale } from '../../redux/action-creators/updateLocale'
import { updateCountry } from '../../redux/action-creators/updateCountry'
import { updateVersion } from '../../redux/action-creators/updateVersion'
import { updateMethod } from '../../redux/action-creators/updateMethod'


import './index.css'

class Dropdown extends React.Component {

  state = {
    greyOutContainer: true,

  }

  greyOutContainer = () => {
    this.setState({greyOutContainer: !this.state.greyOutContainer})
  }
  render(){
    const { labelName, tooltipText, updateLocale, updateTheme, checkoutConfig } = this.props
    return (
      <div className={`dropdownContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
        <input
          type="checkbox"
          onChange={this.greyOutContainer}
        />
        <label className="labelName">{labelName}</label>
        <div className='inputGroup'>
          {labelName === 'Locale' ?
            <select onChange={(e) => updateLocale(e.target.value)}>
              <option selected={'en' === checkoutConfig.locale} value="en">English</option>
              <option selected={'ru' === checkoutConfig.locale} value="ru">Russian</option>
              <option selected={'de' === checkoutConfig.locale} value="de">German</option>
              <option selected={'fr' === checkoutConfig.locale} value="fr">French</option>
            </select>
            :
            <select onChange={(e) => updateTheme(e.target.value)}>
              <option selected={'light' === checkoutConfig.display_mode_theme} value="light">Light</option>
              <option selected={'dark' === checkoutConfig.display_mode_theme} value="dark">Dark</option>
            </select>
          }
          <Info labelName={labelName} tooltipText={tooltipText}/>
        </div> 
      </div>
    )
  }
}

const mapStateToProps = ({ checkoutConfig }) => ({
    checkoutConfig,
})

const mapDispatchToProps = dispatch => bindActionCreators({ updateTheme, updateLocale }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
