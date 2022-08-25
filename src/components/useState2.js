import React from 'react';
import { useState } from 'react';

function State2() {

    // também é possível usar objetos como valor
    const [count, setCount] = useState({
        theme: "dark",
        numero: 1
    });

    const incrementState = () => {
        // Sintax
        setCount((prevState) => {
            return {
                // se for usado assim ira alterar todo o valor do objeto para numero + 1
                // numero: prevState.numero + 1
                // usando assim preserva o valor anterior mudando somente o que for declarado
                ...prevState,
                numero: prevState.numero + 1
            }
        });
        // console.log(count)
    }

    return (
        <div>
            <br/><h1>UseState ex 2</h1><br/>
            <h2>{count.numero}</h2>
            <h2>{count.theme}</h2>
            <button onClick={incrementState}>+</button>
        </div>
    )
}

export default State2