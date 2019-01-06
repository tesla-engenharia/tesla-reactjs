import { combineReducers } from 'redux';

import menu from './menu';
import blog from './blog';
import login from './login';

export default combineReducers({
  menu,
  blog,
  login,
});
