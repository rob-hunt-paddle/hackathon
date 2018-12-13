import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateShowing } from '../../redux/action-creators/updateShowing'
import { updateValue } from '../../redux/action-creators/updateValue'
import Info from '../info'

import './index.css'

class Input extends React.Component {

  state = {
    greyOutContainer: true,
  }

  greyOutContainer = param => {
    this.setState({greyOutContainer: !this.state.greyOutContainer})
    this.props.updateShowing(param)
  }

  render(){
  const { labelName, tooltipText, updateValue } = this.props
 	switch(labelName) {
      case 'quantity':
		return(
		  <div className={`inputContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
		    <input
	        type="checkbox"
		      onChange={() => this.greyOutContainer(labelName)}
		    />
			<label className="labelName">{labelName} </label>
		    <div className='inputGroup'>
		      <input type='text' onChange={(e) => updateValue(labelName, e.target.value)}/>
		      <Info labelName={labelName} tooltipText={tooltipText}/>
		    </div>
		  </div>
		)
	  case 'email':
		return(
		  <div className={`inputContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
		    <input
	          type="checkbox"
		         onChange={() => this.greyOutContainer(labelName)}
		    />
			<label className="labelName">{labelName} </label>
		    <div className='inputGroup'>
		      <input type='text' onChange={(e) => updateValue(labelName, e.target.value)}/>
		      <Info labelName={labelName} tooltipText={tooltipText}/>
		    </div>
		  </div>
		)
	  case 'postcode':
		return(
		  <div className={`inputContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
		    <input
	          type="checkbox"
		        onChange={() => this.greyOutContainer(labelName)}
		    />
			<label className="labelName">{labelName} </label>
		    <div className='inputGroup'>
		      <input type='text' onChange={(e) => updateValue(labelName, e.target.value)}/>
		      <Info labelName={labelName} tooltipText={tooltipText}/>
		    </div>
		  </div>
		)
	  case 'coupon':
		return(
		  <div className={`inputContainer ${this.state.greyOutContainer ? 'greyOut' : ''}`}>
		    <input
	          type="checkbox"
		      onChange={() => this.greyOutContainer(labelName)}
		    />
			<label className="labelName">{labelName} </label>
		    <div className='inputGroup'>
		      <input type='text' onChange={(e) => updateValue(labelName, e.target.value)}/>
		      <Info labelName={labelName} tooltipText={tooltipText}/>
		    </div>
		  </div>
		)
    default:
      return null;
	}

  }
}

const mapStateToProps = ({ codeToRender }) => ({
    codeToRender,
})

const mapDispatchToProps = dispatch => bindActionCreators({ updateShowing, updateValue}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Input)
