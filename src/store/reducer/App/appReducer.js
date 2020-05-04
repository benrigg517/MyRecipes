const initialState = {
  loading: true,
};

export const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'load':
      const loadedState = {loading: action.payload};
      return loadedState;
    default:
      return state;
  }
};
