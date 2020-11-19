import React from "react";
import movieStore from "../Stores/movieStore";
import { observer } from "mobx-react";
import SearchBar from "./SearchBar";
import { useState } from "react";
import MovieItem from "./MovieItem";

//stylying
import "../App.css";

const Watchedlist = () => {
  const list = movieStore.finished;

  const [query, setQuery] = useState("");
  const search = list
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <MovieItem movie={movie} />);
  return (
    <div className="containter-List">
      <SearchBar setQuery={setQuery} />
      <h2>
        Watchedlist <span className="counter"> -{list.length}-</span>
      </h2>
      <div> {search}</div>
    </div>
  );
};

export default observer(Watchedlist);
