import React from "react"
import data from "../data.json"

export default function(props) {
  const id = props.match.params.id
  const user = data.find(userid => userid.id === Number(id))
  return (
    <div class="header">
      <div class="img1">
        <img class="img" src={user.picture.large}></img>
      </div>
      <p class="fname">
        {user.name.first}, {user.name.last}
      </p>
      <p class="email">{user.email}</p>
      <p class="phone">{user.phone}</p>
      <p class="location">
        {user.location.city}, {user.location.state}
      </p>
      <button type="button">
        <a href="http://localhost:3000/">Go Back</a>
      </button>
    </div>
  )
}
