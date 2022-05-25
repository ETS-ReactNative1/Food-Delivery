export const setTab = data => {
  return dispatch => {
    dispatch({
      type: 'SET_TAB',
      data: data,
    });
  };
};

export const setSliderTab = data => {
  return dispatch => {
    dispatch({
      type: 'SET_SLIDER_TAB',
      data: data,
    });
  };
};
