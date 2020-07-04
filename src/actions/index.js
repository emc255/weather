import { FETCH_WEATHER } from "./types";
import openWeather from "../apis/openWeather";

export const fetchWeather = (city) => async (dispatch) => {
  try {
    const response = await openWeather.get("/", {
      params: {
        q: city,
        units: "metric",
        appid: "631b94e02170dff92dd00d9ddda77ed6",
      },
    });
    dispatch({ type: FETCH_WEATHER, payload: response.data });
  } catch (err) {
    console.log(err.Error);
    dispatch({ type: FETCH_WEATHER, payload: err });
  }
};
