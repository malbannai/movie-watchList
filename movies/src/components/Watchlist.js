import React from "react";
import movieStore from "../Stores/movieStore";

const Watchlist = () => {
  const list = movieStore.watch();
  const test = list.map((movie) => <h1>{movie.name}</h1>);
  return (
    <>
      <h2>Watchlist</h2>
      <div>{test}</div>
    </>
  );
};

export default Watchlist;
