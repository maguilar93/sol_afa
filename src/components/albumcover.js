import React, { Component } from "react";
import "../AlbumCover.css";
import cover from "../SadOldLoser_Cover.jpeg";

class AlbumCover extends Component {
  state = {};
  render() {
    return (
      <div className="album-fullSection">
        <img src={cover} alt="cover" />
      </div>
    );
  }
}

export default AlbumCover;
