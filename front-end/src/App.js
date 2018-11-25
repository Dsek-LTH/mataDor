import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { AdminRoute, TvRoute, HomeRoute } from "./Routes/index";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomeRoute} />
      <Route path="/admin" component={AdminRoute} />
      <Route path="/tv" component={TvRoute} />
      <Route component={() => <h1>404</h1>} />
    </Switch>
  </BrowserRouter>
);

export default App;
