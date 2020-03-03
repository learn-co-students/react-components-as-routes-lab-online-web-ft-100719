import React from 'react';

const Movie = props => {
  return (
    <div>
      {props.title}, Run Time: {props.time}
      <ul>Genres:
        {props.genres.map(genre => <li>{genre}</li>)}
      </ul>
    </div>
  )
}

export default Movie