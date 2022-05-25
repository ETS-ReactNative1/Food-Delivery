const initialState = {
  data: 'Login',
  sliderData: 'Foods',
};

const navigations = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TAB':
      return {...state, data: action.data};
    case 'SET_SLIDER_TAB':
      return {...state, sliderData: action.data};
    default:
      return {...state};
  }
};

export default navigations;
