import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Info from '../info'

import { updateShowing } from '../../redux/action-creators/updateShowing'
import { updateValue } from '../../redux/action-creators/updateValue'

import './index.css'

class Dropdown extends React.Component {

  state = {
    greyOutContainer: true,

  }

  greyOutContainer = (param) => {
    this.setState({greyOutContainer: !this.state.greyOutContainer})
    this.props.updateShowing(param)
  }

  render(){
    const { labelName, tooltipText, updateValue, checkoutConfig } = this.props
    switch(labelName) {
      case 'locale':
        return (
          <div className={`dropdownContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
            <input
              type="checkbox"
              onChange={() => this.greyOutContainer(labelName)}
            />
            <label className="labelName">{labelName}</label>
            <div className='inputGroup'>
              <select onChange={(e) => updateValue(labelName, e.target.value)}>
                <option value="en">English</option>
                <option value="ru">Russian</option>
                <option value="de">German</option>
                <option value="fr">French</option>
              </select>
              <Info labelName={labelName} tooltipText={tooltipText}/>
            </div>
          </div>
        );
      case 'displayModeTheme':
        return (
          <div className={`dropdownContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
            <input type="checkbox" onChange={() => this.greyOutContainer(labelName)}/>
            <label className="labelName">{labelName}</label>
            <div className='inputGroup'>
              <select onChange={(e) => updateValue(labelName, e.target.value)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
              <Info labelName={labelName} tooltipText={tooltipText}/>
            </div>
          </div>
        );
      case 'country':
        return (
          <div className={`dropdownContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
            <input type="checkbox" onChange={() => this.greyOutContainer(labelName)}/>
            <label className="labelName">{labelName}</label>
            <div className='inputGroup'>
              <select onChange={(e) => updateValue(labelName, e.target.value)}>
                <option value="AF">Afghanistan</option>
                <option value="BR">Brazil</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
                <option value="JP">Japan</option>
                <option value="NL">Netherlands</option>
                <option value="PH">Philippines</option>
                <option value="ZA">South Africa</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
              </select>
              <Info labelName={labelName} tooltipText={tooltipText}/>
            </div>
          </div>
        );
      case 'method':
        return (
          <div className={`dropdownContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
            <input type="checkbox" onChange={() => this.greyOutContainer(labelName)}/>
            <label className="labelName">{labelName}</label>
            <div className='inputGroup'>
              <select onChange={(e) => updateValue(labelName, e.target.value)}>
                <option value="window">Popup</option>
              </select>
              <Info labelName={labelName} tooltipText={tooltipText}/>
            </div>
          </div>
        );
      case 'checkoutVersion':
        return (
          <div className={`dropdownContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
            <input type="checkbox" onChange={() => this.greyOutContainer(labelName)}/>
            <label className="labelName">{labelName}</label>
            <div className='inputGroup'>
              <select onChange={(e) => updateValue(labelName, e.target.value)}>
                <option value="new">new</option>
                <option value="old">old</option>
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

const mapDispatchToProps = dispatch => bindActionCreators({ updateValue, updateShowing}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
