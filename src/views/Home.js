import React from 'react';
import HelloWorld from "../components/HelloWorld";
import CounterExample from "../components/CounterExample";

function Home() {
        return (
            <div>
                <h1 className={"font-bold text-2xl"}>This is the home page</h1>
                <HelloWorld name="Props User" test="I'm a test"/>
                <CounterExample/>
            </div>
        );
}

export default Home;