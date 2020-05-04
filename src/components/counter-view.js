import React from "react";

import CounterContextProvider from './counter-context';
import CounterDisplay from './counter-display';
import CounterButtons from './counter-button';

export default function CounterView(){
    return(<CounterContextProvider>
        <h1>Counter</h1>
            <CounterDisplay/>
            <CounterButtons/>
        </CounterContextProvider>
    )
}