import React, { Component } from "react";
// import cover from "../SadOldLoser_Cover.jpeg";
import "../Music.css";
import Dropdown from "./dropdown";
// import Title from "./songTitles";
import Video from "./video";
import { Grid, Cell } from "react-mdl";
import Platforms from "./platforms";
import AlbumCover from "./albumcover";

class Music extends Component {
  state = {};
  render() {
    return (
      <div className="fullPage_music">
        <Dropdown />
        <div className="music-content">
          <Video />
          <Grid className="demo-grid-2">
            <Cell col={6} tablet={12} className="music_col">
              <AlbumCover />
            </Cell>
            <Cell col={6} tablet={12} className="music_col">
              <Platforms />
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Music;
