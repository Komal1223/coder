import React, {useState} from "react";
import ReactDOM from "react-dom";

export default function Form() {
    const [count, setCount] = useState(0);

    return(<div>
        <p>You clicked the button {count} times</p>
        <button onClick={() => setCount(count+1)}>Clicked</button>
    </div>)
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
