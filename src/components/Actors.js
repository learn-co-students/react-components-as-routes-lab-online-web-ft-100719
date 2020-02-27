import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, i) => 
          { return (
          <div key={i}>
            <strong>Name: </strong>{actor.name} <br>
            </br>
            <ul>
            <strong>Movies: </strong> {actor.movies.map((movie, index) => <li key={index} className="list-item"> {movie} </li>) }  
            </ul>
            <hr></hr>
          </div> )}
        ) }   
    </div>
  );
};

export default Actors;
