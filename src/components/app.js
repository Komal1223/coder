import React, {useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

export default function Form() {
    const [count, setCount] = useState(0);

    return[<div>
        <p>You clicked the button {count} times</p>
        <button onClick={() => setCount(count+1)}>Clicked</button>
    </div>]
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Router>
    <Switch>
        <Route exact={true} path={'/welcome'} component={Form}/>
        <Route render={ () => <Redirect to={'/welcome'}/>} />
    </Switch>

</Router>, wrapper) : false;
