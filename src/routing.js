import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import home from "./home.js";
import login from "./login.js";
import Navigation from "./navigation.js";

class Routing extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path="/home" component={home} exact />
                        <Route path="/" component={login} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routing;
