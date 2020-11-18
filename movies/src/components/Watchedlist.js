import React from "react";
import movieStore from "../Stores/movieStore";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";
import { useState } from "react";
import MovieItem from "./MovieItem";

const Watchedlist = () => {
  const list = movieStore.finished;

  const [query, setQuery] = useState("");
  const search = list
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <MovieItem movie={movie} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <h2>-Watchedlist- {list.length}</h2>
      <div> {search}</div>
    </>
  );
};

export default observer(Watchedlist);
