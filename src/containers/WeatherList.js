import React from "react";
import { useSelector } from "react-redux";

const WeatherList = () => {
  const weather = useSelector((state) => state.weather);
  const error = useSelector((state) => state.error);

  let counter = 0;
  const addCounter = () => {
    return counter++;
  };

  const renderWeatherList = weather.map((city) => {
    return (
      <React.Fragment key={addCounter()}>
        <tr>
          <td>{city.name}</td>
          <td>{city.main.temp} °Celcius</td>
          <td>{city.main.pressure}</td>
          <td>{city.main.humidity}</td>
        </tr>
      </React.Fragment>
    );
  });

  const checkRenderWeatherList = renderWeatherList ? renderWeatherList : null;
  const checkError = error ? (
    <div className="ui negative message">
      <i className="close icon"></i>
      <div className="header">{error}</div>
    </div>
  ) : null;

  return (
    <div>
      {checkError}
      <table className="ui single line table">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{checkRenderWeatherList}</tbody>
      </table>
    </div>
  );
};

export default WeatherList;
