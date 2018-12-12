import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateQuantity } from '../../redux/action-creators/updateQuantity'

import './index.css'

const Input = ({ labelName, updateQuantity }) => {
  return(
    <div className="inputContainer">
      <div className="innerInputContainer">
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

export default connect(mapStateToProps, mapDispatchToProps)(Input)
