import React from 'react'
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Input from '../input'
import Dropdown from '../dropdown'
import Group from '../group'
import Toggle from '../toggle'
import { toggleModal } from '../../redux/action-creators/toggleModal'

const Modal = ({ checkoutConfig, modal, toggleModal, save }) => (
  <ReactModal
    isOpen={modal.isOpen}
    style={{
      content: {
        background: '#fff',
        padding: 0,
        inset: '0px',
        border: 'none'
      },
      overlay: {
        position: 'fixed',
        zIndex: 99999999,
        width: '100%',
        maxWidth: '960px',
        height: '90%',
        margin: 'auto',
        borderRadius: '4px',
        backgroundColor: 'transparent'
      }
    }}
  >
    <div className="modalContainer">
      <div className="checkoutSettings">
        <h4>Settings</h4>
      </div>
      <div className="internalContainer">
          <div className="checkoutSettings">
            <div>
              <Group groupName="General">
                <Dropdown
                  labelName="Checkout Version"
                  tooltipText="Version tooltip text"
                />
                <Dropdown
                  labelName="Locale"
                  tooltipText="Locale tooltip text"
                />
              </Group>
              <Group groupName="Pre-fill">
                <Input
                  labelName="Quantity"
                  tooltipText="Quantity tooltip text"
                />
                <Input
                  labelName="Email"
                  tooltipText="Email tooltip text"
                />
                <Dropdown
                  labelName="Country"
                  tooltipText="Country tooltip text"
                />
                <Input
                  labelName="Postcode"
                  tooltipText="Postcode tooltip text"
                />
              </Group>
              <Group groupName="Layout and styles">
                <Dropdown
                  labelName="Theme"
                  tooltipText="Theme tooltip text"
                />
                <Dropdown
                  labelName="Method"
                  tooltipText="Method tooltip text"
                />
              </Group>
              <Group groupName="Feature flags">
                <Toggle
                  labelName="Toggle switch"
                />
              </Group>
            </div>
          </div>
          <div className="code">
            <pre>
              {`
                Paddle.Checkout.Open(
                  ${JSON.stringify(checkoutConfig, null, 2)}
                )
                `
              }
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
            onClick={() => save()}> Update Checkout
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
