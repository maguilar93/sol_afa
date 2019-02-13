import React, { Component } from "react";
import Dropdown from "./dropdown";
import "../Contact.css";
import youtube from "../socialMedia/youtube.svg";
import facebook from "../socialMedia/facebook.svg";
import instagram from "../socialMedia/instagram.svg";
import mail from "../socialMedia/send-mail.svg";
import { Grid, Cell } from "react-mdl";
import Footer from "./footer";
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCdBfz2Y97I-9OgTF4SCzSKQ"
              >
                <img className="socialMediaImage" alt="youtube" src={youtube} />
              </a>
            </Cell>
            <Cell col={3} tablet={6} phone={12}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/afelonaffair/"
              >
                <img
                  className="socialMediaImage"
                  alt="facebook"
                  src={facebook}
                />
              </a>
            </Cell>
            <Cell col={3} tablet={6} phone={12}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/afelonaffair/?hl=en"
              >
                <img
                  className="socialMediaImage"
                  alt="instagram"
                  src={instagram}
                />
              </a>
            </Cell>
            <Cell col={3} tablet={6} phone={12}>
              <a href="mailto:mailto:ceo@afelonaffair.com">
                <img className="socialMediaImage" alt="e-mail" src={mail} />
              </a>
            </Cell>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
