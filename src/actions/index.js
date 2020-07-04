import { FETCH_WEATHER, FETCH_WEATHER_ERROR } from "./types";
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
    dispatch({ type: FETCH_WEATHER_ERROR, payload: "We're sorry we can't find the city" });
  }
};

export const error = () => {
  return {
    type: FETCH_WEATHER_ERROR,
    payload: "",
  };
};
