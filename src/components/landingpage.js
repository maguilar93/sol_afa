import React, { Component } from "react";
import Dropdown from "./dropdown";
// import { Grid, Cell } from "react-mdl";

// import {} from "react-router-dom";

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="landing-content">
        <Dropdown />
        <button>continue to album</button>
      </div>
    );
  }
}

export default LandingPage;
