import React from "react";
import AddButton from "../buttons/AddButton";
import movieStore from "../Stores/movieStore";
import { observer } from "mobx-react";
import MovieItem from "./MovieItem";

const Watchlist = () => {
  const list = movieStore.watch;
  const test = list.map((movie) => <MovieItem movie={movie} />);
  return (
    <>
      <h2>Watchlist {list.length}</h2>
      <div>{test}</div>
    </>
  );
};

export default observer(Watchlist);
