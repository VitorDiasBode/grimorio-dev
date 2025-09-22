import React from "react";
import { Link } from "react-router";
import '../CartaoDoPersonagem/style.css';

export default function CartaoDoPersonagem({nome, categoria, id, imagem}) {
    return(
        <div className="cartao-personagem">
            <div className="imagem-wrapper">
                <img src={imagem} alt={nome} />
            </div>

            <h2 className="nome">{nome}</h2>
            <p className="categoria">{categoria}</p>

            <Link to={`/personagem/${id}`} className="saiba-mais">
                Saiba mais
            </Link>
        </div>
    )
}