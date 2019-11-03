import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Admin, Tv, Home } from "./Routes/index";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route path="/tv" component={Tv} />
            <Route component={() => <h1>404</h1>} />
        </Switch>
    </BrowserRouter>
);

export default App;
