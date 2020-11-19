import React from "react";
import { useState } from "react";
import movieStore from "../Stores/movieStore";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const AddButton = () => {
  const [name, setName] = useState({
    id: 0,
    name: "",
    type: false,
  });

  const handleChange = (event) => {
    setName({ ...name, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    movieStore.addmovie(name);
    console.log(name);
  };
  return (
    <div className="nav-bar">
      <input
        name="name"
        onChange={handleChange}
        type="text"
        placeholder="Add your movie.."
        className="add-input"
      />
      <button class="btn btn-warning my-1 my-sm-3" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default AddButton;
