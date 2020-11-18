import React from "react";
import AddButton from "../buttons/AddButton";
import movieStore from "../Stores/movieStore";
import { observer } from "mobx-react";

const Watchlist = () => {
  // const list = movieStore.watch();
  // const test = list.map((movie) => <h1>{movie.name}</h1>);
  return (
    <>
      <h2>Watchlist</h2>
      <div>
        {movieStore.watch.map((movie) => (
          <h1>{movie.name}</h1>
        ))}
      </div>
    </>
  );
};

export default observer(Watchlist);
