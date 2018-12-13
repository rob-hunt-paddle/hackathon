import React from 'react'
import Switch from '@material-ui/core/Switch';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateQuantity } from '../../redux/action-creators/updateQuantity'
import ReactTooltip from 'react-tooltip'
import { findDOMNode } from 'react-dom'

import './index.css'

class Toggle extends React.Component {

  state = {
    greyOutContainer: true,

  }

  greyOutContainer = () => {
    this.setState({greyOutContainer: !this.state.greyOutContainer})
  }

  render(){
    const { labelName, tooltipText, toggleSwitch, toggleStatus } = this.props
 
  	return(
  	  <div className={`toggleContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
  	    <input
            type="checkbox"
  	      onChange={this.greyOutContainer}
  	    />
  		  <label className="labelName"> {labelName} </label>
        <div className='inputGroup toggleGroup'>
          <Switch
            onClick={toggleSwitch}
            on={toggleStatus}
          />
          <div data-tip="tooltip" data-type="info" data-place="left" data-for={labelName.replace(/\s/g, '')+"Tooltip"} className="info-icon">
            <ReactTooltip id={labelName.replace(/\s/g, '')+"Tooltip"}>
              <p>{tooltipText}</p>
            </ReactTooltip>
          </div>
  	    </div>
  	  </div>
  	)	
  }
}

const mapStateToProps = ({ checkoutConfig }) => ({
    checkoutConfig,
})

const mapDispatchToProps = dispatch => bindActionCreators({ updateQuantity }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)
