import React, { Component } from "react";
import "../Title.css";

class Title extends Component {
  state = {
    songs: [
      "Falls Away",
      "Drone The World",
      "Eggshells",
      "New Tricks",
      "Got Away",
      "Stretch My Hands",
      "Blumenau",
      "Orange Juice"
    ]
  };

  render() {
    return (
      <div>
        <div className="topSection">
          <ul className="songTitles">
            {this.state.songs.map(song => (
              <li className="songs" key={song}>
                {song}
              </li>
            ))}
          </ul>
        </div>
        <div />
      </div>
    );
  }
}

export default Title;
