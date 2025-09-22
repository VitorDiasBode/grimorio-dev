import React from "react";
import { Link } from "react-router";

export default function CartaoDoPersonagem({nome, categoria, id}) {
    return(
        <div>
            {nome} (#{categoria})
            <Link to={`/personagem/${id}`}>Saiba mais</Link>
        </div>
    )
}