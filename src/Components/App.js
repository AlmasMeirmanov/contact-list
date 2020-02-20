import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from "./Home"
import View from "./View"

export default function() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/view/:id" component={View} />
      </div>
    </Router>
  )
}
