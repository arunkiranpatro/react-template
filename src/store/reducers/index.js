import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import ajaxReducer from "./ajaxReducer";

export default combineReducers({
  errors: errorReducer,
  ajaxContainer: ajaxReducer
});
