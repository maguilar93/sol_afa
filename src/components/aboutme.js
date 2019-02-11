import React, { Component } from "react";
import Dropdown from "./dropdown";
import "../About.css";
import { Grid, Cell } from "react-mdl";
import Selfie from "./selfie";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-fullPage">
        <Dropdown />
        <Grid className="demo-grid-2">
          <Cell col={6} tablet={12} className="music_col">
            <Selfie />
          </Cell>
          <Cell col={6} tablet={12} className="music_col">
            <span className="about-text">
              I love cheese, especially blue castello port-salut. Rubber cheese
              swiss st. agur blue cheese emmental goat stinking bishop
              bocconcini paneer. Fromage frais bocconcini halloumi cream cheese
              monterey jack melted cheese halloumi halloumi. Fromage frais
              bavarian bergkase melted cheese cheesecake cheese on toast
              emmental chalk and cheese the big cheese. Fromage when the cheese
              comes out everybody's happy blue castello croque monsieur say
              cheese everyone loves cheese strings bavarian bergkase. Camembert
              de normandie blue castello hard cheese. Bocconcini paneer
              mozzarella. Cheeseburger pepper jack mascarpone the big cheese say
              cheese the big cheese fromage frais pepper jack. Fromage frais
              blue castello chalk and cheese ricotta lancashire st. agur blue
              cheese queso mascarpone. Melted cheese cheesy grin monterey jack
              stinking bishop macaroni cheese manchego stinking bishop feta.
              Cheeseburger mascarpone cheddar danish fontina rubber cheese
              caerphilly cream cheese chalk and cheese. Manchego roquefort
              stilton dolcelatte pepper jack chalk and cheese st. agur blue
              cheese cheese and biscuits. The big cheese.
            </span>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
