import React, { Component } from 'react';
import ReactModal from 'react-modal';
import queryString from 'query-string'
import humps from 'humps'
import './App.css'

class Main extends Component {

  state = {
    checkoutConfig: {
      displayModeTheme: "dark",
      quantity: 5,
      locale: 'en',
      checkoutVersion: "new",
      product: 534099,
    },
    isOpen: false,
  }

  componentDidMount() {
    // const params = queryString.parse(this.props.location.search)
    // this.setState(prevState => ({
    //   ...prevState.checkoutConfig,
    //   checkoutConfig: params
    // }))
  }

  openCheckout() {
    window.Paddle.Setup({ vendor: 33079 });
    this.refresh()
  }

  refresh = () => {
    const checkoutConfig = this.state.checkoutConfig
    const { product, checkoutVersion } = this.state
    const mergeState = {
      ...checkoutConfig,
      checkoutVersion,
      product,
    }
    window.Paddle.Checkout.open(this.state.checkoutConfig);
  }

  changeConfigParam(parameter, value) {
    this.setState(prevState => (
      {checkoutConfig:
        { ...prevState.checkoutConfig,
          [parameter]: value}
        }
    ))
  }

  save() {
    window.Paddle.Checkout.open(this.state.checkoutConfig);
  }

  toggleModal() {
    this.setState({isOpen: !this.state.isOpen})
    this.save()
  }

  openModal() {
    this.setState({isOpen: true})
  }

  render() {
    console.log(this.state.checkoutConfig, 'cc')
    return (
      <div className="container">
        <button className="btn" onClick={() => this.openCheckout()}> open checkout </button>
        <button className="btn" onClick={() => this.openModal()}> open modal </button>
        <ReactModal
          isOpen={this.state.isOpen}
          style={{
            content: {
              background: 'green',
            },
            overlay: {
              position: 'fixed',
              zIndex: 99999999,
              width: '600px',
              height: '600px',
              margin: 'auto',
            }
          }}
        >
          <button className="btn" onClick={() => this.changeConfigParam('displayModeTheme', 'dark')}> dark mode </button>
          <button className="btn" onClick={() => this.changeConfigParam('displayModeTheme', 'light')}> light mode </button>
          <select onChange={(e) => this.changeConfigParam('locale', e.target.value)}>
            <option value="en">English</option>
            <option value="ru">Russian</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
          <input placeholder="quantity" onChange={(e) => this.changeConfigParam('quantity', e.target.value)} />
          <button onClick={() => this.toggleModal()}> save changes </button>
        </ReactModal>
      </div>
    );
  }
}

export default Main;
