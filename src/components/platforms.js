import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../Platforms.css";

class Platforms extends Component {
  state = {};
  render() {
    return (
      <div className="platforms-fullSection">
        <Grid className="demo-grid-1">
          <Cell col={12} className="downloadOn">
            <a href="/" className="playingOn">
              <i className="fab fa-spotify platformLogo" />
              spotify
            </a>
          </Cell>
          <Cell col={12} className="downloadOn">
            <a href="/" className="playingOn">
              <i className="fab fa-itunes-note platformLogo" />
              itunes
            </a>
          </Cell>
          <Cell col={12} className="downloadOn">
            <a href="/" className="playingOn">
              <i className="fab fa-amazon platformLogo" />
              amazon
            </a>
          </Cell>
          <Cell col={12} className="downloadOn">
            <a href="/" className="playingOn">
              <i className="fab fa-bandcamp platformLogo" />
              bandcamp
            </a>
          </Cell>
          <Cell col={12} className="downloadOn">
            <a href="/" className="playingOn">
              <i className="fab fa-soundcloud platformLogo" />
              soundcloud
            </a>
          </Cell>
          <Cell col={12} className="downloadOn">
            <a href="/" className="playingOn">
              <i className="fab fa-google-play platformLogo" />
              google play
            </a>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Platforms;
