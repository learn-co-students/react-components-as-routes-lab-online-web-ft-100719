import React from 'react';
import { directors } from '../data';

const generateDirector = director => <div>{director.name}, Movies: <ul>{director.movies.map(movie => <li>{movie}</li>)}</ul></div>

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => generateDirector(director))}
    </div>
  );
}

export default Directors
