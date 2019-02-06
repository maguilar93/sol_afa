import React, { Component } from "react";
import Dropdown from "./dropdown";
import "../Landingpage.css";
import "../Dropdown.css";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-fullPage">
        <Dropdown />
        <div className="landing-content">
          <div className="landing-button">
            <a href="./music">available now</a>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
