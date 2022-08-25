import React from 'react'
import { useEffect, useState } from 'react'

function Effect() {
    const [num, setNum] = useState(true);

    // o hook effect roda sempre que um elemento é atualizado
    // Não passando segundo paramentro em useEffect
    // Vai ser atualizado sempre que qualquer componente da pagina for alterado

    useEffect(() => {
        const text = document.querySelector(".changed");
        if (num === false) {
            text.innerText = "A página foi alterada"
        }
        console.log("+1 atualização")
    }, [num])

    const incrementState = () => {
        setNum((prevState) => (
            !num
        ));
    };

    return (
        <div>
            <h1>useEffect ex 1</h1>
            <h2>{num.toString()}</h2>
            <h2 className='changed'>{}</h2>
            <button onClick={incrementState} className="atualizar">Atualizar</button>
        </div>
    )
}

export default Effect