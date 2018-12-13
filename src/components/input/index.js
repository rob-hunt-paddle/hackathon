import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateQuantity } from '../../redux/action-creators/updateQuantity'
import { updatePostcode } from '../../redux/action-creators/updatePostcode'
import { updateCoupon } from '../../redux/action-creators/updateCoupon'
import { updateEmail } from '../../redux/action-creators/updateEmail'
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
    const { labelName, tooltipText, updateQuantity, updatePostcode, updateCoupon, updateEmail, checkoutConfig } = this.props
 	switch(labelName) {
      case 'Quantity':
		return(
		  <div className={`inputContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
		    <input
	          type="checkbox"
		      onChange={this.greyOutContainer}
		    />
			<label className="labelName">{labelName} </label>
		    <div className='inputGroup'>
		      <input type='text' onChange={(e) => updateQuantity(e.target.value)}/>
		      <Info labelName={labelName} tooltipText={tooltipText}/>
		    </div>
		  </div>
		)
	  case 'Email':
		return(
		  <div className={`inputContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
		    <input
	          type="checkbox"
		      onChange={this.greyOutContainer}
		    />
			<label className="labelName">{labelName} </label>
		    <div className='inputGroup'>
		      <input type='text' value={checkoutConfig.guest_email} onChange={(e) => updateEmail(e.target.value)}/>
		      <Info labelName={labelName} tooltipText={tooltipText}/>
		    </div>
		  </div>
		)
	  case 'Postcode':
		return(
		  <div className={`inputContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
		    <input
	          type="checkbox"
		      onChange={this.greyOutContainer}
		    />
			<label className="labelName">{labelName} </label>
		    <div className='inputGroup'>
		      <input type='text' value={checkoutConfig.guest_postcode} onChange={(e) => updatePostcode(e.target.value)}/>
		      <Info labelName={labelName} tooltipText={tooltipText}/>
		    </div>
		  </div>
		)
	  case 'Coupon':
		return(
		  <div className={`inputContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
		    <input
	          type="checkbox"
		      onChange={this.greyOutContainer}
		    />
			<label className="labelName">{labelName} </label>
		    <div className='inputGroup'>
		      <input type='text' onChange={(e) => updateCoupon(e.target.value)}/>
		      <Info labelName={labelName} tooltipText={tooltipText}/>
		    </div>
		  </div>
		)
	}

  }
}

const mapStateToProps = ({ checkoutConfig }) => ({
    checkoutConfig,
})

const mapDispatchToProps = dispatch => bindActionCreators({ updateQuantity, updatePostcode, updateCoupon, updateEmail}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Input)
