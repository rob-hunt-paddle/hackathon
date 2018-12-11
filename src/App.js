import React, { Component } from 'react';
import './App.css'

class App extends Component {

  state = {
    checkoutConfig: {
      product: 534099,
      checkoutVersion: "new",
      displayModeTheme: "dark",
    }
  }

  componentDidMount() {

  }

  openCheckout() {
    window.Paddle.Setup({ vendor: 33079 });
    this.refresh()
  }

  refresh = () => {
    window.Paddle.Checkout.open(this.state.checkoutConfig);
  }

  changeToLightTheme() {
    this.setState(prevState => (
      {checkoutConfig:
        { ...prevState.checkoutConfig,
          displayModeTheme: 'light'}
        }
    ), () => this.refresh())
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <button className="btn" onClick={() => this.openCheckout()}> open checkout </button>
          <button className="btn" onClick={() => this.changeToLightTheme()}> change theme </button>
        </div>
      </div>
    );
  }
}

export default App;
