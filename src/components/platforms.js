import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import "../Platforms.css";

class Platforms extends Component {
  render() {
    return (
      <div className="platforms-fullSection">
        <Grid className="platform">
          <Cell col={2} phone={12} className="downloadOn">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://open.spotify.com/artist/5I71oqDxW39FaH4mu29s30?si=rGWsDQYoTcalK-BfPrR8ng"
              className="playingOn"
            >
              <i className="fab fa-spotify platformLogo" />
              spotify
            </a>
          </Cell>
          <Cell col={2} phone={12} className="downloadOn">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://itunes.apple.com/us/album/sad-old-loser/1450720380?app=music&ign-mpt=uo%3D4"
              className="playingOn"
            >
              <i className="fab fa-itunes-note platformLogo" />
              itunes
            </a>
          </Cell>
          <Cell col={2} phone={12} className="downloadOn">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.amazon.com/gp/product/B07N5M19XZ/?tag=distrokid06-20"
              className="playingOn"
            >
              <i className="fab fa-amazon platformLogo" />
              amazon
            </a>
          </Cell>
          <Cell col={2} phone={12} className="downloadOn">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://afelonaffair.bandcamp.com/album/sad-old-loser"
              className="playingOn"
            >
              <i className="fab fa-bandcamp platformLogo" />
              bandcamp
            </a>
          </Cell>
          <Cell col={2} phone={12} className="downloadOn">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://soundcloud.com/afelonaffair/sets/sadoldloser"
              className="playingOn"
            >
              <i className="fab fa-soundcloud platformLogo" />
              soundcloud
            </a>
          </Cell>
          <Cell col={2} phone={12} className="downloadOn">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://bit.do/sadoldloser"
              className="playingOn"
            >
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
