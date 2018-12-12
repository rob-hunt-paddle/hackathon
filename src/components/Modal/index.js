import React from 'react'
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Group from '../group'
import Dropdown from '../dropdown'
import { toggleModal } from '../../redux/action-creators/toggleModal'

const modalContentStyle = {
  background: '#fff',
  padding: 0,
  inset: '0px',
  border: 'none'
}

const modalOverlayStyle = {
  position: 'fixed',
  zIndex: 99999999,
  width: '100%',
  maxWidth: '960px',
  height: '90%',
  margin: 'auto',
  borderRadius: '4px'
}

const Modal = ({ checkoutConfig, modal, toggleModal }) => (
  <ReactModal
    isOpen={modal.isOpen}
    style={{
      content: { modalContentStyle },
      overlay: { modalOverlayStyle }
    }}
  >
    <div className="modalContainer">
      <div className="checkoutSettings">
        <h4>Settings</h4>
      </div>
      <div className="internalContainer">
          <div className="checkoutSettings">
            <div>
              <Group
                labelName="Quantity"
              />
              <Dropdown
                labelName="Locale"
              />
              <Dropdown
                labelName="Theme"
              />
            </div>
            <div> <h6> Group </h6> </div>
          </div>
          <div className="code">
            <pre>
              {JSON.stringify(checkoutConfig, null, 2)}
            </pre>
          </div>
        </div>
       <div className="modalButtons">
         <button
            className="cancelBtn"
            onClick={() => toggleModal()}> Cancel
         </button>
         <button
            className="updateBtn"
            onClick={() => toggleModal()}> Update Checkout
        </button>
       </div>
    </div>
  </ReactModal>
)

const mapStateToProps = ({ checkoutConfig, modal }) => ({
    checkoutConfig,
    modal,
})

const mapDispatchToProps = dispatch => bindActionCreators({ toggleModal }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Modal)