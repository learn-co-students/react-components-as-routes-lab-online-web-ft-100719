import React from 'react';
import { directors } from '../data';

let directorsInfo = []

const renderDirectors = () => {
  directorsInfo = directors.map((director, i) => {
    return <div key={i}>
      <h2>Name: {director.name}</h2>
      <h4>Movies:</h4>
      <ul>
        {director.movies.map((movie, i) => {
          return <li key={i}>
            {movie}
          </li>
        })}
      </ul>
    </div>
  })
  return directorsInfo
}

renderDirectors()

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorsInfo}
    </div>
  );
}

export default Directors
