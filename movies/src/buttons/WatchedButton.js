import React from "react";
import movieStore from "../Stores/movieStore";

const WatchedButton = ({ movie }) => {
  return (
    <div>
      <h3 onClick={() => movieStore.changeType(movie)}>
        {movie.type ? "Watched" : "Watch"}
      </h3>
    </div>
  );
};

export default WatchedButton;
