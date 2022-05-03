import React from "react";
import { directors } from "../data";
// console.log(directors)

function Directors() {

  const directorList = directors.map((director) => {
    return (
     <div 
        key={director.name}
        >
        {director.name}
        <ul>
          <li>{director.movies}</li>
        </ul>
      </div>
    ) 
  })


  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  ) 
}

export default Directors;
