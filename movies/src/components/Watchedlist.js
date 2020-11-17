import React from "react";
import movieStore from "../Stores/movieStore";

const Watchedlist = () => {
  const list = movieStore.finished();
  const test = list.map((movie) => <h1>{movie.name}</h1>);
  return (
    <>
      <h2>-Watchedlist-</h2>
      <div>{test}</div>
    </>
  );
};

export default Watchedlist;
