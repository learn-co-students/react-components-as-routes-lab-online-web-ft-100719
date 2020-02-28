import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director,i)=> (
        <div key={i}>
          <strong>{director.name}</strong>
          <ul>
          {director.movies.map((name, i)=> (
                <li key={i}>{name}</li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
