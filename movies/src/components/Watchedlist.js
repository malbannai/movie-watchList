import React from "react";
import movieStore from "../Stores/movieStore";
import MovieItem from "./MovieItem";
import { observer } from "mobx-react";

const Watchedlist = () => {
  const list = movieStore.finished;
  const test = list.map((movie) => <MovieItem movie={movie} />);
  return (
    <>
      <h2>-Watchedlist- {list.length}</h2>
      <div>{test}</div>
    </>
  );
};

export default observer(Watchedlist);
