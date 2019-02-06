import React, { Component } from "react";
import "../Dropdown.css";

class Dropdown extends Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="dropdown">
        <a href="/" className="title">
          A felon affair
        </a>
        <div className="dropdown-button" onClick={this.showDropdownMenu}>
          <span className="dropdown-menu">MENU</span>
          <span className="fas fa-angle-down dropdown-arrow" />
        </div>

        {this.state.displayMenu ? (
          <ul className="dropdown-list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="aboutme">About Me</a>
            </li>
            <li>
              <a href="music">Music</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
