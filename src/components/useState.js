import React from 'react';
import { useState } from 'react';

function State() {

    // declara o state e guarda um valor inicial
    const [count, setCount] = useState(0);

    // função que altera o valor do state com base no seu
    // valor anterior
    const incrementState = () => {
        // Sintax
        setCount((prevState) => (
            prevState + 1
        ));
    };

    const decrementState = () => {
        setCount((prevState) => (
            prevState - 1
        ));
    };

    return (
        <div>
            <h1>UseState ex 1</h1><br/>
            <h2>{count}</h2>
            <button onClick={incrementState}>+</button>
            <button onClick={decrementState}>-</button>
        </div>
    )
}

export default State