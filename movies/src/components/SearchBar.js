import React from "react";
import "../App.css";

const SearchBar = ({ setQuery }) => {
  return (
    <input
      onChange={(event) => setQuery(event.target.value)}
      className="search-bar"
      placeholder="Search for your movie ..."
    />
  );
};

export default SearchBar;
