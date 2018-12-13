const initialState = {
  contents: [
    {
      name: 'displayModeTheme',
      render: false,
      value: 'light'
    },
    {
      name: 'checkoutVersion',
      render: false,
      value: 'new'
    },
    {
      name: 'quantity',
      render: false,
      value: '1'
    },
    {
      name: 'locale',
      render: false,
      value: 'en'
    },
    {
      name: 'email',
      render: false,
      value: 'test@paddle.com'
    },
    {
      name: 'country',
      render: false,
      value: 'GB'
    },
    {
      name: 'postcode',
      render: false,
      value: 'EC2A 2DB'
    },
    {
      name: 'method',
      render: false,
      value: 'window'
    },
    {
      name: 'product',
      value: 100,
      render: true,
    }
  ]
}

const filterState = (state) => {
  state.filter(item => item.name === 'displayModeTheme')

}

export default(state = initialState, action) => {
  switch(action.type){
    case 'UPDATE_SHOWING':
      return {
        ...state,
        contents: state.contents.map((param) => {
          if (param.name === action.name){
            return {
              ...param,
              render: !param.render
            }
          }
          else {
            return param
          }
        })
      }
    case 'UPDATE_VALUE':
      return {
        ...state,
        contents: state.contents.map((param) => {
          if (param.name === action.name){
            return {
              ...param,
              value: action.value
            }
          }
          else {
            return param
          }
        })
      }
    default:
      return state;
  }
}
