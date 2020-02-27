import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
  return (
    <div>
    <h1>Movies Page</h1>
        {movies.map((movie, i) => 
          { return (
          <div key={i}>
            <strong>Title: </strong>{movie.title} <br>
            </br><strong>Running time:  </strong>{movie.time} 
            <ul>
            <strong>Genres: </strong> {movie.genres.map((genre, index) => <li key={index} className="list-item"> {genre} </li>) }  
            </ul>
            <hr></hr>
          </div> )}
        ) }   
    </div> 
  );
};

export default Movies;
