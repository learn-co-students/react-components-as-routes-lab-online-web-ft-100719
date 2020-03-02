import React from 'react';
import { actors } from '../data';

let actorsInfo = []

const renderActors = () => {
  actorsInfo =  actors.map((actor, i) => {
    return <div key={i}>
      <h2>Name: {actor.name}</h2>
      <h4>Movies:</h4>
      <ul>
        {actor.movies.map((movie, i) => {
          return <li key={i}>
            {movie}
          </li>
        })}
      </ul>
    </div>
  })
  return actorsInfo
}

renderActors()

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsInfo}
    </div>
  );
};

export default Actors;
