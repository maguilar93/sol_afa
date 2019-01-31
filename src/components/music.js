import React, { Component } from "react";
import cover from "../SadOldLoser_Cover.jpeg";

class Music extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Music</h1>
        <img src={cover} alt="cover" />
      </div>
    );
  }
}

export default Music;
