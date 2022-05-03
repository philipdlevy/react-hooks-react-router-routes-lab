import React from "react";
import { movies } from "../data";
// console.log(movies)

function Movies() {

  const movieList = movies.map((movie) => {
    return (
     <div 
        key={movie.title}
        >
        {movie.title}
        {movie.time}
        <ul>
          <li>{movie.genres}</li>
        </ul>
      </div>
    ) 
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {movieList}
    </div>
  ) 
}

export default Movies;
