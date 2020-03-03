import React from 'react';
import { actors } from '../data';

const generateActor = actor => <div>{actor.name}, Movies: <ul>{actor.movies.map(movie => <li>{movie}</li>)}</ul></div>

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => generateActor(actor))}
    </div>
  );
};

export default Actors;
