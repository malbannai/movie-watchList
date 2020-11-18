import { moviesData } from "../movies";
import { makeObservable, observable, action, computed } from "mobx";

class MovieStore {
  movies = moviesData;

  constructor() {
    makeObservable(this, {
      movies: observable,
      watch: computed,
      finished: action,
      addmovie: action,
    });
  }

  get watch() {
    console.log(this.movies);
    return this.movies.filter((movie) => {
      if (!movie.type) return movie;
    });
  }

  finished = () => {
    return this.movies.filter((movie) => {
      if (movie.type) return movie;
    });
  };

  addmovie = (newMovie) => {
    newMovie.id = this.movies[this.movies.length - 1].id + 1;
    this.movies.push(newMovie);
  };
}

const movieStore = new MovieStore();
export default movieStore;
