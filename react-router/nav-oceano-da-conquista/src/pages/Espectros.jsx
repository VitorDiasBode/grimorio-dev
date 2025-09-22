import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { personagens } from "../data";
import CartaoDoPersonagem from "../components/CartaoDoPersonagem/CartaoDoPersonagem";

function Espectros() {
    const espectros = personagens.filter( (personagem) => personagem.categoria == 'espectros');
    
    return (
        <div>
            <Navbar />

            <main>
                <h1>Espectros</h1>

                <ul>
                    {espectros.map( (espectro) => (
                        <li key={espectro.id}>
                            <CartaoDoPersonagem nome={espectro.nome} categoria={espectro.categoria} imagem={espectro.imagem}/>
                        </li>    
                    ))}
                </ul>
            </main>
        </div>
    )
}

export default Espectros