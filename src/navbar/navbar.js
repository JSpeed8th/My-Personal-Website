import React from "react";
import "./navbar.css";

const navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about me</a>
        </li>
        <li>
          <a href="#">projects</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
