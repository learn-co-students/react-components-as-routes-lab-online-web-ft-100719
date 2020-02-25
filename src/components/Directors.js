import React from 'react';
import { directors } from '../data';

const showDirectors = () => {
  return directors.map(director => {
    return (
      <div>
        <h2>Name: {director.name}</h2>
        Movies: <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {showDirectors()}
    </div>
  );
}

export default Directors
