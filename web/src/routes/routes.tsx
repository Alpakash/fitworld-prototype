import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, } from "react-router-dom";
import Intro from '../pages/intro/Introduction';
import Home from '../pages/Home';
import Initializing from "../pages/intro/Initializing";

const Routes = (props: any) => {
    return (
        <Router>
          <Route path={"/intro"}><Home/></Route>
            { props.children }

            <Switch>
                <Route path="/intro"><Intro/></Route>
                <Route path={ "/init" }><Initializing/></Route>
            </Switch>
        </Router>
    );
};

export default Routes;
