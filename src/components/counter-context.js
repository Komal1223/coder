import React, {createContext, useState} from "react";
import Button from "@material-ui/core/Button";

export const CounterContext = createContext();

export default function CounterContextProvider() {
    const [count, setCount] = useState(0);

    return[<CounterContext.Provider value={[count, setCount]}>
        <p>You clicked the button {count} times</p>
        <Button onClick={() => setCount(count+1)}>Clicked</Button>
    </CounterContext.Provider>]
}