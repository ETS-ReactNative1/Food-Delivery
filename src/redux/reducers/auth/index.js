const initialState = {
  data: [],
};

const auths = (state = initialState, action) => {
  switch (action.type) {
    case 'EXAMPLE':
      return {...state, data: action.data};
    default:
      return {...state};
  }
};

export default auths;
