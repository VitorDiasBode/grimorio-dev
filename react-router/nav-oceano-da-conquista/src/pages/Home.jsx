import React from "react";
import { personagens } from "../data";
import { Link } from "react-router";
import Navbar from "../components/Navbar/Navbar";

function Home() {
    return (
        <div>
            <Navbar />
            <main>
                <h1>Todos do Oceano da Conquista!</h1>
                <ul>
                    {personagens.map( (personagem) => (
                        <li key={personagem.id}> 
                            {personagem.nome} (#{personagem.categoria})
                            <Link to={`/personagem/${personagem.id}`}>Saiba mais</Link>
                        </li>
                    ))}
                </ul>
            </main>
        </div>
        
    )
}

export default Home