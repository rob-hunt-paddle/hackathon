import React from 'react'
import Switch from '@material-ui/core/Switch';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateQuantity } from '../../redux/action-creators/updateQuantity'
import Info from '../info'

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
  		  <label className="labelName">{labelName}</label>
        <div className='inputGroup toggleGroup'>
          <Switch
            onClick={toggleSwitch}
            on={toggleStatus}
          />
          <Info labelName={labelName} tooltipText={tooltipText}/>
  	    </div>
  	  </div>
  	)
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ updateQuantity }, dispatch)

export default connect(null, mapDispatchToProps)(Toggle)
