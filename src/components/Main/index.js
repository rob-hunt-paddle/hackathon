import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Modal from '../Modal'
import { updateQuantity } from '../../redux/action-creators/updateQuantity'
import { toggleModal } from '../../redux/action-creators/toggleModal'
import './App.css'

class Main extends Component {

  state = {
    checkoutVersion: "new",
  }

  componentDidMount() {
    setTimeout(() => { this.openCheckout()}, 250)
  }

  transformCodeToShow = () => {
    const x = this.props.codeToRender.contents.filter(item => item.render !== false)
    let obj = {}
    x.forEach((item) => (
      obj[item.name] = item.value
    ))
    return obj
  }

  openCheckout() {
    window.Paddle.Environment.set("staging");
    window.Paddle.Setup({ vendor: 33079 });
    this.refresh()
  }

  refresh() {
    window.Paddle.Checkout.open(this.transformCodeToShow());
  }

  save = () => {
    window.Paddle.Checkout.open(this.transformCodeToShow());
    this.props.toggleModal()
  }

  render() {
    return (
      <div className="container">
        <span className="oppo">OPPO</span>
        <button className="btn" onClick={() => this.props.toggleModal()}> <i className="material-icons">edit</i> </button>
        <Modal
          save={this.save}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ codeToRender }) => ({
    codeToRender,
})

const mapDispatchToProps = dispatch => bindActionCreators({ updateQuantity, toggleModal }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
