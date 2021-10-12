import React from "react";
import { Redirect } from "react-router";
import { HashRouter, Route } from "react-router-dom";

import Todo from "./todo/todo";
import About from "./about/about";

export default (props) => {
    return (
        <HashRouter>
            <Route path="/todos" component={Todo} />
            <Route path="/about" component={About} />
            <Redirect from="*" to="/todos" />
        </HashRouter>
    );
};
