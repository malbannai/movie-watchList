import React from "react";
import DeleteButton from "../buttons/DeleteButton";
import WatchedButton from "../buttons/WatchedButton";

const MovieItem = ({ movie }) => {
  return (
    <div>
      <h1>{movie.name}</h1>
      <WatchedButton movie={movie} />
      <DeleteButton movie={movie} />
    </div>
  );
};

export default MovieItem;
