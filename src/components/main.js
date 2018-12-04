import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import resume from './resume';




const Main = () => {
    return (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/aboutme" component={AboutMe} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/projects" component={Projects} />
    <Route exact path="/resume" component={resume} />
  </Switch>
    );
};

export default Main;
