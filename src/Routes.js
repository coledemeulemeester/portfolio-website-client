import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./containers/About";
import Experience from "./containers/Experience";
import Music from "./containers/Music";
import Xp from "./containers/Xp";

import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      {/* Lander / About / Home Page */}
      <Route exact path="/">
        <About />
      </Route>
      {/* Experience Page */}
      <Route exact path="/experience">
        <Experience />
      </Route>
      <Route exact path="/experience/:experienceId" component={Xp} />
      {/* Music Page */}
      <Route exact path="/music">
        <Music />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}