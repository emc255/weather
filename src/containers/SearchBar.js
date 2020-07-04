import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchWeather } from "../actions";
import { error } from "../actions";

const SearchBar = ({ label }) => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(error());
    dispatch(fetchWeather(term));
    setTerm("");
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>{label}</label>
          <div className="ui action input">
            <input onChange={(e) => setTerm(e.target.value)} value={term} type="text" placeholder="Search City..." />
            <button className="ui button">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
