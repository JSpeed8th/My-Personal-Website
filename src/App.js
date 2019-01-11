import React, { Component } from "react";
import "./App.css";
import Navbar from "./navbar/navbar";

class App extends Component {
  state = {
    navLinks: ["home", "about me", "projects", "contact"]
  };
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
