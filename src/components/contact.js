import React, { Component } from "react";
import Dropdown from "./dropdown";
import "../Contact.css";
import youtube from "../socialMedia/youtube.svg";
import facebook from "../socialMedia/facebook.svg";
import instagram from "../socialMedia/instagram.svg";
import mail from "../socialMedia/send-mail.svg";
import { Grid, Cell } from "react-mdl";
// import Responsive from "react-responsive";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="contact-fullpage">
        <Dropdown />
        <span className="socialText">Get in touch</span>
        <div className="socialMedia">
          <Grid className="socialMediaGrid">
            <Cell col={3} tablet={6} phone={12}>
              <img className="socialMediaImage" alt="youtube" src={youtube} />
            </Cell>
            <Cell col={3} tablet={6} phone={12}>
              <img className="socialMediaImage" alt="facebook" src={facebook} />
            </Cell>
            <Cell col={3} tablet={6} phone={12}>
              <img
                className="socialMediaImage"
                alt="instagram"
                src={instagram}
              />
            </Cell>
            <Cell col={3} tablet={6} phone={12}>
              <img className="socialMediaImage" alt="e-mail" src={mail} />
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Contact;
