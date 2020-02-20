import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import data from "../data.json"

export default function() {
  return (
    <div id="list">
      <div class="peeps">My Peeps</div>
      {data.map(home => (
        <Link to={`/view/${home.id}`}>
          <div class="users">
            <img class="circle" src={home.picture.thumbnail} />
            <p class="first">{home.name.first} </p>
            <p class="last">{home.name.last}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
