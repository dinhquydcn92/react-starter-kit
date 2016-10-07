import { combineReducers } from 'redux';
import runtime from './runtime';
import intl from './intl';
import posts from './posts';

export default combineReducers({
  runtime,
  intl,
  posts,
});
