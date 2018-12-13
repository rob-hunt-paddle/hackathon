import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import queryString from 'query-string'
import { bindActionCreators } from 'redux'

import humps from 'humps'
import Modal from '../Modal'
import { updateQuantity } from '../../redux/action-creators/updateQuantity'
import { toggleModal } from '../../redux/action-creators/toggleModal'
import './App.css'

const languageOptions = [
  {name: 'English', langCode: 'en'},
  {name: 'French', langCode: 'fr'},
  {name: 'German', langCode: 'de'},
  {name: 'Russian', langCode: 'ru'},
]

class Main extends Component {

  state = {
    checkoutVersion: "new",
  }

  componentDidMount() {
    // const params = queryString.parse(this.props.location.search)
    // for (var key in params){
    //     const camelCaseKey = humps.camelize(key)
    //   if (camelCaseKey in this.props.checkoutConfig){
    //     if (camelCaseKey === 'locale'){
    //       this.props.updateLocale(params[camelCaseKey])
    //     }
    //     if (camelCaseKey === 'quantity'){
    //       this.props.updateQuantity(params[camelCaseKey])
    //     }
    //     if (camelCaseKey === 'displayModeTheme'){
    //       this.props.updateTheme(params['display_mode_theme'])
    //     }
    //   }
    // }
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
        <span class="oppo">OPPO</span>
        <button className="btn" onClick={() => this.props.toggleModal()}> <i class="material-icons">edit</i> </button>
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
