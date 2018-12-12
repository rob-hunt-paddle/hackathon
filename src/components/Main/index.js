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
import './App.css'

const languageOptions = [
  {name: 'English', langCode: 'en'},
  {name: 'French', langCode: 'fr'},
  {name: 'German', langCode: 'de'},
  {name: 'Russian', langCode: 'ru'},
]

class Main extends Component {

  state = {
    isOpen: true,
    checkoutVersion: "new",
  }

  componentDidMount() {
    // const params = queryString.parse(this.props.location.search)
    // this.setState(prevState => ({
    //   ...prevState.checkoutConfig,
    //   checkoutConfig: params
    // }))
    // this.openCheckout()
  }

  openCheckout() {
    window.Paddle.Setup({ vendor: 33079 });
    this.refresh()
  }

  refresh = () => {
    const checkoutConfig = this.props.checkoutConfig
    const { product, checkoutVersion } = this.state
    const mergeState = {
      ...checkoutConfig,
      checkoutVersion,
      product,
    }
    window.Paddle.Checkout.open(this.props.checkoutConfig);
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
            },
            overlay: {
              position: 'fixed',
              zIndex: 99999999,
              width: '800px',
              height: '600px',
              margin: 'auto',
            }
          }}
        >
          <div className="modalContainer">
            <div className="checkoutSettings">
              <h4> Checkout Settings </h4>
            </div>
            <div className="internalContainer">
                <div className="checkoutSettings">
                  <div>
                    <Group labelName="Quantity" />
                    <Dropdown
                      labelName="Locale"
                      changeConfigParam={this.changeConfigParam}
                      options={languageOptions}
                    />
                    <Dropdown
                      labelName="Theme"
                      changeConfigParam={this.changeConfigParam}
                    />
                    <input placeholder="quantity" onChange={(e) => this.changeConfigParam('quantity', e.target.value)} />
                  </div>
                  <div> <h6> Group </h6> </div>
                </div>
                <div className="code">
                  <pre>
                    the code will go here
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

const mapDispatchToProps = dispatch => bindActionCreators({ updateTheme, updateLocale }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
