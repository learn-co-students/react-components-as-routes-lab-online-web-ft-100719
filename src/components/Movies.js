import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        {movies[0].title}, Runtime: {movies[0].time}, Genres: <ul>
          {movies[0].genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
      <div>
        {movies[1].title}, Runtime: {movies[1].time}, Genres: <ul>
          {movies[1].genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
      <div>
        {movies[2].title}, Runtime: {movies[2].time}, Genres: <ul>
          {movies[2].genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Movies;
