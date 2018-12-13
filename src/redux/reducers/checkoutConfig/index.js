const initialState = {
  checkoutVersion: "new",
  product: 534099
}

export default(state = initialState, action) => {
  switch(action.type){
    case 'UPDATE_THEME':
      return {
        ...state,
        display_mode_theme: action.theme
      }
    case 'UPDATE_COUPON':
      return {
        ...state,
        coupon: action.coupon
      }
    case 'UPDATE_EMAIL':
      return {
        ...state,
        guest_email: action.email
      }
    case 'UPDATE_COUNTRY':
      return {
        ...state,
        guest_country: action.country
      }
    case 'UPDATE_POSTCODE':
      return {
        ...state,
        guest_postcode: action.postcode
      }
    case 'UPDATE_VERSION':
      return {
        ...state,
        checkout_version: action.version
      }
    case 'UPDATE_METHOD':
      return {
        ...state,
        method: action.method
      }
    case 'UPDATE_LOCALE':
      return {
        ...state,
        locale: action.locale
      }
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        quantity: action.amount
      }
    default:
      return state;
  }
}
