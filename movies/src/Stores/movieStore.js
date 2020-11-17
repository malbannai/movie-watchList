import { movies } from "../movies";
import { makeObservable, observable, action } from "mobx";

class MovieStore {
  movies = movies;

  constructor() {
    makeObservable(this, {
      movies: observable,
      watch: action,
      finished: action,
    });
  }

  watch = () => {
    return movies.filter((movie) => {
      if (!movie.type) return movie;
    });
  };

  finished = () => {
    return movies.filter((movie) => {
      if (movie.type) return movie;
    });
  };
}

const movieStore = new MovieStore();
export default movieStore;
