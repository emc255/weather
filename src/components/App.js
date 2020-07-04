import React from "react";
import SearchBar from "../containers/SearchBar";
import WeatherList from "../containers/WeatherList";

const App = () => {
  return (
    <div className="ui container">
      <SearchBar label="Weather Forecast" />
      <WeatherList />
    </div>
  );
};

export default App;
