import React from 'react'
import { useEffect, useState } from 'react'

function Effect2() {
    const [section, setSection] = useState("Home");

    // passando o segundo parametro ira rodar sempre que algo escolhido (section) for alterado 
    // podendo ser passado mais de 1 parametro
    useEffect(() => {
        console.log("Section alterada");
    }, [section])

    const changeSection = (section) => {
        setSection(section);
    };

    return (
        <div>
            <h1>useEffect ex 2</h1>
            <h2>{section}</h2>
            <button onClick={() => changeSection("Home")} className='sections'>Home</button>
            <button onClick={() => changeSection("About")} className='sections'>About</button>
            <button onClick={() => changeSection("Reviews")} className='sections'>Reviews</button>
            <h4>Foi atualizado para {section}</h4>
        </div>
    )
}

export default Effect2;
