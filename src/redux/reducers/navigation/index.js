const initialState = {
    data: "Login",
  };
  
  const navigations = (state = initialState, action) => {
    switch (action.type) {
      case "SET_TAB":
        return { ...state, data: action.data };
  
      default:
        return { ...state };
    }
  };
  
  export default navigations;