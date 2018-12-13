const initialState = {
  checkoutVersion: "new",
  product: 534099
}

export default(state = initialState, action) => {
  console.log('reducer')
  switch(action.type){
    case 'UPDATE_THEME':
      return {
        ...state,
        display_mode_theme: action.theme
      }
    case 'UPDATE_COUNTRY':
      console.log(action)
      return {
        ...state,
        country: action.country
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
      console.log('default')
      return state;
  }
}
