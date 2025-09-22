import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { personagens } from "../data";
import CartaoDoPersonagem from "../components/CartaoDoPersonagem/CartaoDoPersonagem";

function Piratas() {
    const piratas = personagens.filter( (personagem) => personagem.categoria == 'piratas');

    return(
        <div>
            <Navbar />

            <h1>Piratas</h1>

            <ul>
                {piratas.map( (pirata) => (
                    <li key={pirata.key}>
                        <CartaoDoPersonagem nome={pirata.nome} categoria={pirata.categoria}/>
                    </li>    
                ))}
            </ul>
        </div>
    )
}

export default Piratas