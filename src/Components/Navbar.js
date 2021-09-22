import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div style={{ position: "fixed" }}>
        <nav class="navbar navbar-light bg-light flex-column align-items-stretch p-3">
          <a class="navbar-brand" href="/home">
            RUNGROJ
          </a>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/">home</Link>
            </li>
            <li class="nav-item">
              <Link to="/map">Map</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
