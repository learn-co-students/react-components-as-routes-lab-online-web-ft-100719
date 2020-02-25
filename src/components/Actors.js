import React from 'react';
import { actors } from '../data';

const showActors = () => {
  return actors.map(actor => {
    return (
      <div>
        <h2>Name: {actor.name}</h2>
        Movies: <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {showActors()}
    </div>
  );
};

export default Actors;
