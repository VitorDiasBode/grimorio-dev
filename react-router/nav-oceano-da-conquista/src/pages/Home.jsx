import React from "react";
import { personagens } from "../data";
import { Link } from "react-router";

function Home() {
    return (
        <main>
            <h1>Todos do Oceano da Conquista!</h1>
            <ul>
                {personagens.map( (personagem) => (
                    <li key={personagem.id}> 
                        {personagem.nome} ({personagem.categoria})
                        <Link to={`/personagem/${personagem.id}`}>Saiba mais</Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Home