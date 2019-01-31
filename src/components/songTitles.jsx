import React, { Component } from "react";

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
        <ul>
          {this.state.songs.map(song => (
            <li key={song}>{song}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Title;
