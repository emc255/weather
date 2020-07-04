import { FETCH_WEATHER_ERROR } from "../actions/types";

export default (state = "", action) => {
  switch (action.type) {
    case FETCH_WEATHER_ERROR:
      return action.payload;
    default:
      return state;
  }
};
