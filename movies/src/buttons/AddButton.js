import React from "react";
import { useState } from "react";
import movieStore from "../Stores/movieStore";
import "bootstrap/dist/css/bootstrap.min.css";

const AddButton = () => {
  const [name, setName] = useState({
    id: 0,
    name: "",
    type: false,
  });

  const handleChange = (event) => {
    setName({ ...name, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    movieStore.addmovie(name);
    console.log(name);
  };
  return (
    <div>
      <input
        name="name"
        onChange={handleChange}
        type="text"
        className="form-control"
      />
      <button
        class="btn btn-outline-success my-1 my-sm-3"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
};

export default AddButton;
