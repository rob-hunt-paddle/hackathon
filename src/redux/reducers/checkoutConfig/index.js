const initialState = {
  displayModeTheme: 'light',
  quantity: 5,
  locale: 'en',
  checkoutVersion: "new",
  product: 534099,
}

export default(state = initialState, action) => {
  switch(action.type){
    case 'UPDATE_THEME':
      return {
        ...state,
        displayModeTheme: action.theme
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
