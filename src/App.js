import React, { Component } from "react";
import classes from "./App.css";
import Navbar from "./navbar/navbar";
import Home from "./home/home";

class App extends Component {
  state = {
    navLinks: ["home", "about me", "projects", "contact"]
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
