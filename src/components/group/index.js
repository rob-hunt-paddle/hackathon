import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateQuantity } from '../../redux/action-creators/updateQuantity'

import './index.css'

const Group = ({ labelName, updateQuantity }) => {
  return(
    <div className="groupContainer">
      <div> <h6> Group </h6> </div>
      <div className="innerGroupContainer">
        <label className="labelName"> {labelName} </label>
        <input onChange={(e) => updateQuantity(e.target.value)}/>
      </div>
    </div>
  )
}

const mapStateToProps = ({ checkoutConfig }) => ({
    checkoutConfig,
})

const mapDispatchToProps = dispatch => bindActionCreators({ updateQuantity }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Group)
