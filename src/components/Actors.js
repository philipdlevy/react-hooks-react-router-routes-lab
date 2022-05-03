import React from "react";
import { actors } from "../data";
// console.log(actors)

function Actors() {

  const actorList = actors.map((actor) => {
    return (
     <div 
        key={actor.name}
        >
        {actor.name}
        <ul>
          <li>{actor.movies}</li>
        </ul>
      </div>
    ) 
  })


  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  ) 
}

export default Actors;
