import React from "react";
import movieStore from "../Stores/movieStore";
import { observer } from "mobx-react";
import MovieItem from "./MovieItem";
import { useState } from "react";
import SearchBar from "./SearchBar";

//stylying
import "../App.css";

const Watchlist = () => {
  const list = movieStore.watch;

  const [query, setQuery] = useState("");
  const search = list
    .filter((movie) => movie.name.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => <MovieItem movie={movie} />);

  return (
    <div className="containter-List">
      <SearchBar setQuery={setQuery} />
      <h2>
        Watchlist <span className="counter"> -{list.length}-</span>
      </h2>
      <div>{search}</div>
    </div>
  );
};

export default observer(Watchlist);
