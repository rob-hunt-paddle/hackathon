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
    const { labelName, tooltipText, updateLocale, updateTheme, updateCountry, updateVersion, updateMethod, checkoutConfig } = this.props
    switch(labelName) {
      case 'Locale':
        return (
          <div className={`dropdownContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
            <input type="checkbox" onChange={this.greyOutContainer}/>
            <label className="labelName">{labelName}</label>
            <div className='inputGroup'>
              <select onChange={(e) => updateLocale(e.target.value)}>
                <option selected={'en' === checkoutConfig.locale} value="en">English</option>
                <option selected={'ru' === checkoutConfig.locale} value="ru">Russian</option>
                <option selected={'de' === checkoutConfig.locale} value="de">German</option>
                <option selected={'fr' === checkoutConfig.locale} value="fr">French</option>
              </select>
              <Info labelName={labelName} tooltipText={tooltipText}/>
            </div> 
          </div>
        );
      case 'Theme':
        return (
          <div className={`dropdownContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
            <input type="checkbox" onChange={this.greyOutContainer}/>
            <label className="labelName">{labelName}</label>
            <div className='inputGroup'>
              <select onChange={(e) => updateTheme(e.target.value)}>
                <option selected={'light' === checkoutConfig.display_mode_theme} value="light">Light</option>
                <option selected={'dark' === checkoutConfig.display_mode_theme} value="dark">Dark</option>
              </select>
              <Info labelName={labelName} tooltipText={tooltipText}/>
            </div> 
          </div>
        );
      case 'Country':
        return (
          <div className={`dropdownContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
            <input type="checkbox" onChange={this.greyOutContainer}/>
            <label className="labelName">{labelName}</label>
            <div className='inputGroup'>
              <select onChange={(e) => updateCountry(e.target.value)}>
                <option selected={'AF' === checkoutConfig.guest_country} value="AF">Afghanistan</option>
                <option selected={'BR' === checkoutConfig.guest_country} value="BR">Brazil</option>
                <option selected={'FR' === checkoutConfig.guest_country} value="FR">France</option>
                <option selected={'DE' === checkoutConfig.guest_country} value="DE">Germany</option>
                <option selected={'JP' === checkoutConfig.guest_country} value="JP">Japan</option>
                <option selected={'NL' === checkoutConfig.guest_country} value="NL">Netherlands</option>
                <option selected={'PH' === checkoutConfig.guest_country} value="PH">Philippines</option>
                <option selected={'ZA' === checkoutConfig.guest_country} value="ZA">South Africa</option>
                <option selected={'AE' === checkoutConfig.guest_country} value="AE">United Arab Emirates</option>
                <option selected={'GB' === checkoutConfig.guest_country} value="GB">United Kingdom</option>
                <option selected={'US' === checkoutConfig.guest_country} value="US">United States</option>
              </select>
              <Info labelName={labelName} tooltipText={tooltipText}/>
            </div> 
          </div>
        );
      case 'Method':
        return (
          <div className={`dropdownContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
            <input type="checkbox" onChange={this.greyOutContainer}/>
            <label className="labelName">{labelName}</label>
            <div className='inputGroup'>
              <select onChange={(e) => updateMethod(e.target.value)}>
                <option selected={'window' === checkoutConfig.method} value="window">Popup</option>
              </select>
              <Info labelName={labelName} tooltipText={tooltipText}/>
            </div>  
          </div>
        );
      case 'Checkout Version':
        return (
          <div className={`dropdownContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
            <input type="checkbox" onChange={this.greyOutContainer}/>
            <label className="labelName">{labelName}</label>
            <div className='inputGroup'>
              <select onChange={(e) => updateVersion(e.target.value)}>
                <option selected={'new' === checkoutConfig.checkoutVersion} value="new">new</option>
                <option selected={'old' === checkoutConfig.checkoutVersion} value="old">old</option>
              </select>
              <Info labelName={labelName} tooltipText={tooltipText}/>
            </div> 
          </div>
        );
      default:
        return null;
    }
  }
}

const mapStateToProps = ({ checkoutConfig }) => ({
    checkoutConfig,
})

const mapDispatchToProps = dispatch => bindActionCreators({ updateTheme, updateLocale, updateCountry, updateVersion, updateMethod }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)