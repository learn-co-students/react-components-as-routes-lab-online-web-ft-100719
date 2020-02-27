import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>

      <h1>Directors Page</h1>
      {directors.map((dir, i) => 
          { return (
          <div key={i}>
            <strong>Name: </strong>{dir.name} <br>
            </br>
            <ul>
            <strong>Movies: </strong> {dir.movies.map((movie, index) => <li key={index} className="list-item"> {movie} </li>) }  
            </ul>
            <hr></hr>
          </div> )}
        ) }   
    </div>
  );
}

export default Directors
