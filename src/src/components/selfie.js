import React, { Component } from "react";
import selfie from "../about.JPG";

class Selfie extends Component {
  state = {};
  render() {
    return <img className="selfie" src={selfie} alt="selfie" />;
  }
}

export default Selfie;
