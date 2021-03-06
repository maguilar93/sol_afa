import React, { Component } from "react";
import "../Music.css";
import Dropdown from "./dropdown";
import ReactPlayer from "react-player";
import Platform from "./platforms";
import Footer from "./footer";

class Music extends Component {
  state = {};
  render() {
    return (
      <div className="fullPage_music">
        <Dropdown />
        <div>
          <span className="musicText">Falls Away</span>
          <div className="player-wrapper">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=LVbHwcQPfvA&feature=youtu.be"
              controls
              playing
              className="videoclip"
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <span className="musicText">Get the album now</span>
            <Platform />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Music;
