import React from "react";
import SearchBar from "./SearchBar";
import Test from "./Test";

const App = () => {
  return (
    <div className="ui container">
      <SearchBar label="Weather Forecast" />
      <Test />
    </div>
  );
};

export default App;
