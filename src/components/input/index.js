import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateQuantity } from '../../redux/action-creators/updateQuantity'
import Info from '../info'

import './index.css'

class Input extends React.Component {

  state = {
    greyOutContainer: true,

  }

  greyOutContainer = () => {
    this.setState({greyOutContainer: !this.state.greyOutContainer})
  }

  render(){
    const { labelName, tooltipText, updateQuantity, checkoutConfig } = this.props
 
	return(
	  <div className={`inputContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
	    <input
          type="checkbox"
	      onChange={this.greyOutContainer}
	    />
		<label className="labelName">{labelName}</label>
	    <div className='inputGroup'>
	      <input type='text' onChange={(e) => updateQuantity(e.target.value)}/>
	      <Info labelName={labelName} tooltipText={tooltipText}/>
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
