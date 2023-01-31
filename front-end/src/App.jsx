import React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Admin, Tv, Home, Add, Del } from "./routes/index";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/wait" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route path="/tv" component={Tv} />
	    <Route path="/add/:id" component={Add} />
	    <Route path="/del/:id" component={Del} />
            <Route component={() => <h1>404</h1>} />
        </Switch>
    </BrowserRouter>
);

export default App;
