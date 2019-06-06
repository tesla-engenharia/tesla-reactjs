import { combineReducers } from "redux";

import menu from "./menu";
import blog from "./blog";
import login from "./login";
import user from "./user";
import service from "./service";

export default combineReducers({
  menu,
  blog,
  login,
  user,
  service
});
