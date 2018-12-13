import { combineReducers } from 'redux';
import checkoutConfig from './checkoutConfig';
import modal from './modal';
import codeToRender from './codeToRender';

const rootReducer = combineReducers({
  checkoutConfig,
  modal,
  codeToRender,
});

export default rootReducer;
