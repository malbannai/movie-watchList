import React from "react";
import movieStore from "../Stores/movieStore";
import "../App.css";

const DeleteButton = ({ movie }) => {
  return (
    <div>
      <h3 onClick={() => movieStore.deleteMovie(movie)} className="delete-btn">
        Delete
      </h3>
    </div>
  );
};

export default DeleteButton;
