import React, {useState} from 'react';

function CounterExample() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>
                {count}
            </h1>
            <h2 onClick={() => setCount(count + 1)}>
                Plus Button
            </h2>
            <h2 onClick={() => setCount(count - 1)}>
                Less Button
            </h2>
        </div>
    )

}

export default CounterExample;