import React from "react";
import { useSelector } from "react-redux";
const Test = () => {
  const weather = useSelector((state) => state.weather);
  if (!weather) {
    return null;
  } else if (weather.Error) {
    return <div>{weather}</div>;
  }
  console.log(weather);
  return <div>{weather.name}</div>;
};

export default Test;
