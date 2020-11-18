import React from "react";
import movieStore from "../Stores/movieStore";
import "../App.css";

const WatchedButton = ({ movie }) => {
  return (
    <div>
      <h3 onClick={() => movieStore.changeType(movie)} className="watch-btn">
        {movie.type ? "Watched" : "Watch"}
      </h3>
    </div>
  );
};

export default WatchedButton;
