import React, {useContext} from "react";
import { CounterContext } from './counter-context';

export default function CounterDisplay(){
    const [count] = useContext(CounterContext);
    return(
        <React.Fragment>{count}</React.Fragment>
    )
}
