import React, { Component } from "react";
import "../Video.css";
// import { Grid, Cell } from "react-mdl";
import ReactPlayer from "react-player";

class Video extends Component {
  state = {};
  render() {
    return (
      <div className="videoSection">
        {/* <span className="videoclipTitle">Falls away</span> */}
        {/* <ReactPlayer
          url="https://www.youtube.com/watch?v=jEy6MGu3bIA"
          controls
          className="videoclip"
          width="100%"
          height="100%"
        /> */}
      </div>
    );
  }
}

export default Video;
