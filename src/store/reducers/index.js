import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import DCReducer from "./DCReducer";

export default combineReducers({
  errors: errorReducer,
  multipleDC: DCReducer
});
