import React, { Component } from "react";
import "../Music.css";
import Dropdown from "./dropdown";
import { Grid, Cell } from "react-mdl";
import Platforms from "./platforms";
import AlbumCover from "./albumcover";
import Titles from "./songTitles";

class Music extends Component {
  state = {};
  render() {
    return (
      <div className="fullPage_music">
        <Dropdown />
        <div className="music-content">
          <Grid className="demo-grid-2">
            <Titles />
          </Grid>
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
