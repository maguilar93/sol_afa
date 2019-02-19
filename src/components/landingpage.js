import React, { Component } from "react";
import Dropdown from "./dropdown";
import "../Landingpage.css";
import "../Dropdown.css";
import Footer from "./footer";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-fullPage">
        <Dropdown />
        <div className="landing-content">
          <div className="landing-button">
            <Link to="/music" className="available_now">
              Available Now
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
