import React, { use } from "react";
import { useLocation } from "react-router";
import { personagens } from "../data";
import Navbar from "../components/Navbar/Navbar";

export default function Personagem() {
    const idPersonagem = useLocation().pathname.split('/')[2];
    const personagem = personagens.filter((per) => per.id == idPersonagem)[0];

    return(        
        <div> 
            <Navbar />
            <main>
                Personagem de id {personagem.nome}
            </main>
        
        </div>
    )

}