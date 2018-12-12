import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import queryString from 'query-string'
import { bindActionCreators } from 'redux'

import humps from 'humps'
import Modal from '../Modal'
import { updateTheme } from '../../redux/action-creators/updateTheme'
import { updateLocale } from '../../redux/action-creators/updateLocale'
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
    isOpen: true,
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
    // setTimeout(
    //     function() {
    //         this.openCheckout()
    //     }
    //     .bind(this),
    //     250
    // )
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

  render() {
    const { checkoutConfig } = this.props;
    console.log(checkoutConfig, 'cc')
    return (
      <div className="container">
        <button className="btn" onClick={() => this.props.toggleModal()}> open modal </button>
        <Modal />
      </div>
    );
  }
}

const mapStateToProps = ({ checkoutConfig }) => ({
    checkoutConfig,
})

const mapDispatchToProps = dispatch => bindActionCreators({ updateTheme, updateLocale, updateQuantity, toggleModal }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main)
