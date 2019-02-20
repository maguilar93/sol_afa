import React, { Component } from "react";
import "../Title.css";

class Title extends Component {
  state = {
    songs: [
      <a href="http://www.google.com">Falls Away</a>,
      <a href="http://www.google.com">Drone The World</a>,
      <a href="http://www.google.com">Eggshells</a>,
      <a href="http://www.google.com">New Tricks</a>,
      <a href="http://www.google.com">Got Away</a>,
      <a href="http://www.google.com">Stretch My Hands</a>,
      <a href="http://www.google.com">Blumenau</a>,
      <a href="http://www.google.com">Orange Juice</a>
    ]
  };

  render() {
    return (
      <div>
        <ul className="songTitles">
          {this.state.songs.map(song => (
            <li className="songs" key={song}>
              ♦ {song}
            </li>
          ))}
        </ul>
      </div>

      // <span className="songs"> {this.state.songs} </span>
    );
  }
}

export default Title;
