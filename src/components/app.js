import React from "react";
import ReactDOM from "react-dom";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import CounterView from "./counter-view";

export default function App() {
    return (
        <Container>
            <h1>View</h1>
            <CounterView/>
         </Container>
    )
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Router>
    <Switch>
        <Route exact={true} path={'/welcome'} component={App}/>
        <Route render={ () => <Redirect to={'/welcome'}/>} />
    </Switch>
    
</Router>, wrapper) : false;
