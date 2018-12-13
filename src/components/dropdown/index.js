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

  componentDidMount(){
    setTimeout(() => {
      this.setState({ greyOutContainer: !this.props.codeToRender.contents.filter(par => par.name === this.props.labelName)[0].render})
    }, 100)
  }

  greyOutContainer = (param) => {
    // console.log(this.props.codeToRender.contents.filter(par => par.name === param)[0], 'dis?')
    this.props.updateShowing(param)
    setTimeout(() => {
      this.setState({ greyOutContainer: !this.props.codeToRender.contents.filter(par => par.name === param)[0].render})
    }, 100)
  }

  render(){
    const { labelName, tooltipText, updateValue, codeToRender } = this.props
    switch(labelName) {
      case 'locale':
        return (
          <div className={`dropdownContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
            <input
              type="checkbox"
              onChange={() => this.greyOutContainer(labelName)}
              checked={this.props.codeToRender.contents.filter(param => param.name === labelName)[0].render}
            />
            <label className="labelName">{labelName}</label>
            <div className='inputGroup'>
              <select onChange={(e) => updateValue(labelName, e.target.value)}>
                <option selected={'en' === codeToRender.contents.filter(par => par.name === labelName)[0].value} value="en">English</option>
                <option selected={'ru' === codeToRender.contents.filter(par => par.name === labelName)[0].value} value="ru">Russian</option>
                <option selected={'de' === codeToRender.contents.filter(par => par.name === labelName)[0].value} value="de">German</option>
                <option selected={'fr' === codeToRender.contents.filter(par => par.name === labelName)[0].value} value="fr">French</option>
              </select>
              <Info labelName={labelName} tooltipText={tooltipText}/>
            </div>
          </div>
        );
      case 'displayModeTheme':
        return (
          <div className={`dropdownContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
            <input
              type="checkbox"
              onChange={() => this.greyOutContainer(labelName)}
              checked={this.props.codeToRender.contents.filter(param => param.name === labelName)[0].render}
            />
            <label className="labelName">{labelName}</label>
            <div className='inputGroup'>
              <select onChange={(e) => updateValue(labelName, e.target.value)}>
                <option selected={'light' === codeToRender.contents.filter(par => par.name === labelName)[0].value} value="light">light</option>
                <option selected={'dark' === codeToRender.contents.filter(par => par.name === labelName)[0].value} value="dark">dark</option>
              </select>
              <Info labelName={labelName} tooltipText={tooltipText}/>
            </div>
          </div>
        );
      case 'country':
        return (
          <div className={`dropdownContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
            <input
              type="checkbox"
              onChange={() => this.greyOutContainer(labelName)}
              checked={this.props.codeToRender.contents.filter(param => param.name === labelName)[0].render}
            />
            <label className="labelName">{labelName}</label>
            <div className='inputGroup'>
              <select onChange={(e) => updateValue(labelName, e.target.value)}>
                <option selected={'AF' === codeToRender.contents.filter(par => par.name === labelName)[0].value} value="AF">Afghanistan</option>
                <option selected={'BR' === codeToRender.contents.filter(par => par.name === labelName)[0].value} value="BR">Brazil</option>
                <option selected={'FR' === codeToRender.contents.filter(par => par.name === labelName)[0].value} value="FR">France</option>
                <option selected={'DE' === codeToRender.contents.filter(par => par.name === labelName)[0].value} value="DE">Germany</option>
                <option selected={'JP' === codeToRender.contents.filter(par => par.name === labelName)[0].value} value="JP">Japan</option>
                <option selected={'NL' === codeToRender.contents.filter(par => par.name === labelName)[0].value} value="NL">Netherlands</option>
                <option selected={'PH' === codeToRender.contents.filter(par => par.name === labelName)[0].value} value="PH">Philippines</option>
                <option selected={'ZA' === codeToRender.contents.filter(par => par.name === labelName)[0].value} value="ZA">South Africa</option>
                <option selected={'AE' === codeToRender.contents.filter(par => par.name === labelName)[0].value} value="AE">United Arab Emirates</option>
                <option selected={'GB' === codeToRender.contents.filter(par => par.name === labelName)[0].value} value="GB">United Kingdom</option>
                <option selected={'US' === codeToRender.contents.filter(par => par.name === labelName)[0].value} value="US">United States</option>
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
            <input
              type="checkbox"
              onChange={() => this.greyOutContainer(labelName)}
              checked={this.props.codeToRender.contents.filter(param => param.name === labelName)[0].render}
            />
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

const mapStateToProps = ({ codeToRender }) => ({
    codeToRender,
})

const mapDispatchToProps = dispatch => bindActionCreators({ updateValue, updateShowing}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
