import React from "react";
import Contact from "./contact";
import LandingPage from "./landingpage";
import Music from "./music";
import { Switch, Route } from "react-router-dom";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/contact" component={Contact} />
    <Route path="/music" component={Music} />
  </Switch>
);

export default Main;
