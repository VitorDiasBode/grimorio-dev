import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { personagens } from "../data";
import CartaoDoPersonagem from "../components/CartaoDoPersonagem/CartaoDoPersonagem";
import './page.css'

export default function Marinheiros() {
    const marinheiros = personagens.filter( (personagem) => personagem.categoria == 'marinheiros');
    
    return (
        <div>
            <Navbar />

            <main>
                <h1>Marinheiros</h1>
                <ul>
                    {marinheiros.map( (marinheiro) => (
                        <li key={marinheiro.id}>
                            <CartaoDoPersonagem nome={marinheiro.nome} categoria={marinheiro.categoria} imagem={marinheiro.imagem}/>
                        </li>    
                    ))}
                </ul>
            </main>
        </div>
    )
}

