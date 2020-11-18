import { moviesData } from "../movies";
import { makeObservable, observable, action, computed } from "mobx";

class MovieStore {
  movies = moviesData;

  constructor() {
    makeObservable(this, {
      movies: observable,
      watch: computed,
      finished: computed,
      changeType: action,
      addmovie: action,
    });
  }

  get watch() {
    console.log(this.movies);
    return this.movies.filter((movie) => {
      if (!movie.type) return movie;
    });
  }

  get finished() {
    return this.movies.filter((movie) => {
      if (movie.type) return movie;
    });
  }

  addmovie = (newMovie) => {
    if (this.movies.length !== 0) {
      newMovie.id = this.movies[this.movies.length - 1].id + 1;
      this.movies.push(newMovie);
    } else {
      this.movies.push(newMovie);
    }
  };

  // Watch => Watched
  //if type was false, then change the type from false -> true
  //if type was true, then ture -> false

  changeType = (movie) => {
    // if (movie.type) movie.type = false;
    // else movie.type = true;
    movie.type = !movie.type;
    console.log(movie);
  };

  deleteMovie = (movie) => {
    this.movies = this.movies.filter((wanted) => {
      if (wanted.id !== movie.id) {
        return wanted;
      }
    });
  };
}

const movieStore = new MovieStore();
export default movieStore;
