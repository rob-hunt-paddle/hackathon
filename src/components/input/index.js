import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateQuantity } from '../../redux/action-creators/updateQuantity'
import ReactTooltip from 'react-tooltip'
import { findDOMNode } from 'react-dom'

import './index.css'

class Input extends React.Component {

  state = {
    greyOutContainer: true,

  }

  greyOutContainer = () => {
    this.setState({greyOutContainer: !this.state.greyOutContainer})
  }

  render(){
    const { labelName, updateQuantity, checkoutConfig } = this.props
 
	return(
	  <div className={`inputContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
	    <input
          type="checkbox"
	      onChange={this.greyOutContainer}
	    />
		<label className="labelName"> {labelName} </label>
	    <div className='inputGroup'>
	      <input onChange={(e) => updateQuantity(e.target.value)}/>
	      <div data-tip="tooltip" data-type="info" data-place="left" data-for={labelName+"Tooltip"} className="info-icon">
	        <ReactTooltip id={labelName+"Tooltip"}>
	          <p>Quantity tooltip</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Input)
