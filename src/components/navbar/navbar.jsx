import React from "react";

import "./navbar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div>
        <input
          type="text"
          className="form-control navbar-search"
          placeholder="Search"
        ></input>
      </div>
      <div className="navbar-link-list-container">
        <ul>
          <li>
            <a href="#">Browse</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Sell</a>
          </li>
          <li>
            <a href="#" id="login">
              Log In
            </a>
          </li>
          <li>
            <a href="#" id="signup">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
