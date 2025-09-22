import React from "react";
import { personagens } from "../data";
import { Link } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import CartaoDoPersonagem from "../components/CartaoDoPersonagem/CartaoDoPersonagem";

function Home() {
    return (
        <div>
            <Navbar />
            <main>
                <h1>Todos do Oceano da Conquista!</h1>
                <ul>
                    {personagens.map( (personagem) => (
                        <li key={personagem.id}>
                            <CartaoDoPersonagem nome={personagem.nome} categoria={personagem.categoria} id={personagem.id}></CartaoDoPersonagem>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
        
    )
}

export default Home