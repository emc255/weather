import React from "react";
import { useSelector } from "react-redux";
const Test = () => {
  const weather = useSelector((state) => state.weather);
  if (!weather) {
    return null;
  } // else if (weather) {
  //   //return <div>{weather[0].message}</div>;
  // }

  console.log(weather);
  return (
    <div className="ui list">
      {/* <div class="item">
        <div class="header">{weather.name}</div>
        Temp: {weather.main.temp}
        <br />
        Humidity: {weather.main.humidity}
      </div> */}
    </div>
  );
};

export default Test;
