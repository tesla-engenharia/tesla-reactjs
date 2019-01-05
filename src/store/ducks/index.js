import { combineReducers } from 'redux';

import menu from './menu';
import blog from './blog';

export default combineReducers({
  menu,
  blog,
});
