import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import queryString from 'query-string'
import { bindActionCreators } from 'redux'

import humps from 'humps'
import Group from '../group'
import Dropdown from '../dropdown'
import { updateTheme } from '../../redux/action-creators/updateTheme'
import { updateLocale } from '../../redux/action-creators/updateLocale'
import { updateQuantity } from '../../redux/action-creators/updateQuantity'
import './App.css'

const languageOptions = [
  {name: 'English', langCode: 'en'},
  {name: 'French', langCode: 'fr'},
  {name: 'German', langCode: 'de'},
  {name: 'Russian', langCode: 'ru'},
]

class Main extends Component {

  state = {
    isOpen: false,
    checkoutVersion: "new",
  }

  componentDidMount() {
    const params = queryString.parse(this.props.location.search)

    for (var key in params){
        const camelCaseKey = humps.camelize(key)
      if (camelCaseKey in this.props.checkoutConfig){
        if (camelCaseKey === 'locale'){
          this.props.updateLocale(params[camelCaseKey])
        }
        if (camelCaseKey === 'quantity'){
          this.props.updateQuantity(params[camelCaseKey])
        }
        if (camelCaseKey === 'displayModeTheme'){
          this.props.updateTheme(params['display_mode_theme'])
        }
      }
    }
    setTimeout(
        function() {
            this.openCheckout()
        }
        .bind(this),
        250
    )
  }

  openCheckout() {
    window.Paddle.Setup({ vendor: 33079 });
    this.refresh()
  }

  refresh() {
    const { checkoutConfig } = this.props
    window.Paddle.Checkout.open(checkoutConfig);
  }

  save() {
    window.Paddle.Checkout.open(this.props.checkoutConfig);
  }

  toggleModal() {
    this.setState({isOpen: !this.state.isOpen})
    this.save()
  }

  openModal() {
    this.setState({isOpen: true})
  }

  closeModal() {
    this.setState({isOpen: false})
  }

  render() {
    const { checkoutConfig } = this.props;
    console.log(checkoutConfig, 'cc')
    return (
      <div className="container">
        <button className="btn" onClick={() => this.openCheckout()}> open checkout </button>
        <button className="btn" onClick={() => this.openModal()}> open modal </button>
        <ReactModal
          isOpen={this.state.isOpen}
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
                    <Group
                      labelName="Quantity"
                    />
                    <Dropdown
                      labelName="Locale"
                    />
                    <Dropdown
                      labelName="Theme"
                    />
                    <input placeholder="quantity" onChange={(e) => this.changeConfigParam('quantity', e.target.value)} />
                  </div>
                  <div> <h6> Group </h6> </div>
                </div>
                <div className="code">
                  <pre>
                    {JSON.stringify(this.props.checkoutConfig, null, 2)}
                  </pre>
                </div>
              </div>
             <div className="modalButtons">
               <button
                  className="cancelBtn"
                  onClick={() => this.closeModal()}> Cancel
               </button>
               <button
                  className="updateBtn"
                  onClick={() => this.toggleModal()}> Update Checkout
              </button>
             </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = ({ checkoutConfig }) => ({
    checkoutConfig,
})

const mapDispatchToProps = dispatch => bindActionCreators({ updateTheme, updateLocale, updateQuantity }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
