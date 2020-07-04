import { combineReducers } from "redux";
// import postsReducer from "./postsReducer";
// import usersReducer from "./usersReducer";
import weatherReducer from "./weatherReducer";
import weatherErrorReducer from "./weatherErrorReducer";
export default combineReducers({
  weather: weatherReducer,
  error: weatherErrorReducer,
});
