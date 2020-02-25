import React from 'react';
import { movies } from '../data';

const showMovies = () => {
  return movies.map(movie => {
    return (
      <div>
        <h2>Name: {movie.title}</h2>
        Time: {movie.time}
        <br/><br/>
        Genres: <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })
}

const Movies = () => {
  
  return (
    <div>
        <h1>Movies Page</h1>
        {showMovies()}
    </div>
  );
};

export default Movies;
