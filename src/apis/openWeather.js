import axios from "axios";

//const KEY = "631b94e02170dff92dd00d9ddda77ed6";

export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  // params: {
  //   units: "metric",
  //   appid: KEY,
  // },
});
