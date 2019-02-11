import React, { Component } from "react";
import "../Video.css";
import { Grid, Cell } from "react-mdl";
import ReactPlayer from "react-player";

class Video extends Component {
  state = {};
  render() {
    return (
      <div className="secondSection">
        <Grid className="demo-grid-1">
          <Cell col={12} tablet={12}>
            {/* <span className="videoclipTitle">Falls away</span> */}
            <ReactPlayer
              url="https://www.youtube.com/watch?v=jEy6MGu3bIA"
              controls
              className="videoclip"
              width="1000px"
              height="360px"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Video;
