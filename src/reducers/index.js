import { combineReducers } from "redux";
import count from "./count";
//List of reducers to be combined

const rootReducer = combineReducers({
  // List of reducers seperated by commas
  count
});

export default rootReducer;
