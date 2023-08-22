//reducers/movies.js

const initialState = [];

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload;
    default:
      return state;
  }
};

export default moviesReducer;
