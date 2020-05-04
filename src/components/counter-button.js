import  React, {useContext} from "react";
import { Button } from "@material-ui/core";
import { CounterContext } from "./counter-context";

export default function CounterButtons(){
    const [count, setCount] = useContext(CounterContext);

    const inc = () => { setCount(count+1) };
    const dec = () => { setCount(count-1) };
    return(
        <div>
            <Button color='red' onClick={inc}>Add</Button>
            <Button color='yellow' onclick={dec}>Minus</Button>
        </div>)
}
