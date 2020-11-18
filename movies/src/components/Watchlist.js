import React from "react";
import AddButton from "../buttons/AddButton";
import movieStore from "../Stores/movieStore";
import { observer } from "mobx-react";
import MovieItem from "./MovieItem";
import { useState } from "react";
import SearchBar from "./SearchBar";

const Watchlist = () => {
  const list = movieStore.watch;

  const [query, setQuery] = useState("");
  const search = list
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <MovieItem movie={movie} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <h2>Watchlist {list.length}</h2>
      <div>{search}</div>
    </>
  );
};

export default observer(Watchlist);
