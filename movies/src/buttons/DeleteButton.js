import React from "react";
import movieStore from "../Stores/movieStore";

const DeleteButton = ({ movie }) => {
  return (
    <div>
      <h3 onClick={() => movieStore.deleteMovie(movie)}>Delete</h3>
    </div>
  );
};

export default DeleteButton;
