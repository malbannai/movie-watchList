import React from "react";

const SearchBar = ({ setQuery }) => {
  return <input onChange={(event) => setQuery(event.target.value)} />;
};

export default SearchBar;
