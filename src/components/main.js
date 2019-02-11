import React from "react";
import Contact from "./contact";
import About from "./aboutme";
import LandingPage from "./landingpage";
import Music from "./music";
import { Switch, Route } from "react-router-dom";
import Error from "./error";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/contact" component={Contact} />
    <Route path="/aboutme" component={About} />
    <Route path="/music" component={Music} />
    <Route component={Error} />
  </Switch>
);

export default Main;
