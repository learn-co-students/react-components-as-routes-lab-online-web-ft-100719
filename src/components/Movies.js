import React from 'react';
import { movies } from '../data';

let moviesInfo = []

const renderMovies = () => {
  moviesInfo =  movies.map((movie, i) => {
    return <div key={i}>
      <h2>Name: {movie.title}</h2>
      <h4>Time: {movie.time}</h4>
      <h4>Genres:</h4>
      <ul>
        {movie.genres.map((genre, i) => {
          return <li key={i}>
            {genre}
          </li>
        })}
      </ul>
    </div>
  })
  return moviesInfo
}

renderMovies()

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesInfo}
    </div>
  );
};

export default Movies;
