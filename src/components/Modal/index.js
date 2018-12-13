import React from 'react'
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Input from '../input'
import Dropdown from '../dropdown'
import Group from '../group'
import Toggle from '../toggle'
import { toggleModal } from '../../redux/action-creators/toggleModal'

class Modal extends React.Component {

  componentDidMount() {
    this.transformCodeToShow()
  }

  transformCodeToShow = () => {
    const x = this.props.codeToRender.contents.filter(item => item.render !== false)
    let obj = {}
    x.forEach((item) => (
      obj[item.name] = item.value
    ))
    return obj
  }
  render() {
    const { codeToRender, modal, toggleModal, save } = this.props
    return (
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
            borderRadius: '4px'
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
                    labelName="checkoutVersion"
                    tooltipText="Version tooltip text"
                  />
                  <Dropdown
                    labelName="locale"
                    tooltipText="Locale tooltip text"
                  />
                </Group>
                <Group groupName="Pre-fill">
                  <Input
                    labelName="quantity"
                    tooltipText="Quantity tooltip text"
                  />
                  <Input
                    labelName="email"
                    tooltipText="Email tooltip text"
                  />
                  <Dropdown
                    labelName="country"
                    tooltipText="Country tooltip text"
                  />
                  <Input
                    labelName="postcode"
                    tooltipText="Postcode tooltip text"
                  />
                </Group>
                <Group groupName="Layout and styles">
                  <Dropdown
                    labelName="displayModeTheme"
                    tooltipText="Theme tooltip text"
                  />
                  <Dropdown
                    labelName="method"
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
                      ${JSON.stringify(this.transformCodeToShow(), null, 2)}
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
  }
}

const mapStateToProps = ({ codeToRender, modal }) => ({
    codeToRender,
    modal,
})

const mapDispatchToProps = dispatch => bindActionCreators({ toggleModal }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Modal)
