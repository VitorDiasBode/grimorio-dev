import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { personagens } from "../data";
import CartaoDoPersonagem from "../components/CartaoDoPersonagem/CartaoDoPersonagem";

function Piratas() {
    const piratas = personagens.filter( (personagem) => personagem.categoria == 'piratas');

    return(
        <div>
            <Navbar />

            <main>
                <h1>Piratas</h1>

                <ul>
                    {piratas.map( (pirata) => (
                        <li key={pirata.id}>
                            <CartaoDoPersonagem nome={pirata.nome} categoria={pirata.categoria}/>
                        </li>    
                    ))}
                </ul>
            </main>
        </div>
    )
}

export default Piratas