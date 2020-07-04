import { combineReducers } from "redux";
// import postsReducer from "./postsReducer";
// import usersReducer from "./usersReducer";
import weatherReducer from "./weatherReducer";
export default combineReducers({
  weather: weatherReducer,
});
