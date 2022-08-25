import React from 'react';
import { useState } from 'react';

function State2() {

    // também é possível usar objetos como valor
    const [count, setCount] = useState({
        theme: "light",
        numero: 0
    });

    const incrementState = () => {
        // certa
        setCount((prevState) => {
            return {
                // usando com ...prevState, preserva o valor anterior mudando somente o que for declarado
                ...prevState,
                numero: prevState.numero + 1
            }
        });
        // console.log(count)
    }

    const incrementStateErrado = () => {
        // certa
        setCount((prevState) => {
            return {
                // se for usado assim ira alterar todo o valor do objeto para numero + 1
                numero: prevState.numero + 1
            }
        });
        // console.log(count)
    }

    return (
        <div>
            <h1>UseState ex 2</h1>
            <h2>{count.numero}</h2>
            <h2>{count.theme}</h2>
            <h4>Forma certa: </h4>
            <button onClick={incrementState}>V</button>
            <h4>Forma errada: </h4>
            <button onClick={incrementStateErrado} className="errado">X</button>
        </div>
    )
}

export default State2