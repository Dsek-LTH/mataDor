import React from "react";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Admin, Tv, Home, Add, Del } from "./routes/index";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={ <Home /> } />
            <Route path="/wait/*" element={ <Home /> } />
            <Route path="/admin" element={ <Admin /> } />
            <Route path="/tv" element={ <Tv /> } />
	    <Route path="/add/:id" element={ <Add /> } />
	    <Route path="/del/:id" element={ <Del /> } />
            <Route element={ () => <h1>404</h1> } />
        </Routes>
    </BrowserRouter>
);

export default App;
