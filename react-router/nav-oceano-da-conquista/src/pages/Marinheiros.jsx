import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { personagens } from "../data";
import CartaoDoPersonagem from "../components/CartaoDoPersonagem/CartaoDoPersonagem";

export default function Marinheiros() {
    const marinheiros = personagens.filter( (personagem) => personagem.categoria == 'marinheiros');
    
    return (
        <div>
            <Navbar />

            <h1>Marinheiros</h1>

            <ul>
                {marinheiros.map( (marinheiro) => (
                    <li key={marinheiro.key}>
                        <CartaoDoPersonagem nome={marinheiro.nome} categoria={marinheiro.categoria}/>
                    </li>    
                ))}
            </ul>
        </div>
    )
}

