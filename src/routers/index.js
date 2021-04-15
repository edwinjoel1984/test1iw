import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "../components/layouts/socialWidget";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Test />
                </Route>
            </Switch>
        </Router>
    );
}
