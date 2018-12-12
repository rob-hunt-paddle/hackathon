import { combineReducers } from 'redux';
import checkoutConfig from './checkoutConfig';
import modal from './modal';

const rootReducer = combineReducers({
  checkoutConfig,
  modal,
});

export default rootReducer;
