export const setTab = data => {
  return dispatch => {
    dispatch({
      type: 'SET_TAB',
      data: data,
    });
  };
};
