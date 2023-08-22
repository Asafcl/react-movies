//reducers/index.js

import { combineReducers } from 'redux';
import moviesReducer from './movies';
import searchReducer from './search';

const rootReducer = combineReducers({
  movies: moviesReducer,
  searchResults: searchReducer,
});

export default rootReducer;
