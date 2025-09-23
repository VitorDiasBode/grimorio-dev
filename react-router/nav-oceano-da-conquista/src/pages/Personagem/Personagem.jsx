import { useParams } from "react-router";
import { personagens } from "../../data";
import Navbar from "../../components/Navbar/Navbar";
import ReactMarkdown from "react-markdown";
import "./style.css"

export default function Personagem() {
  const { id } = useParams();
  const personagem = personagens.find((p) => p.id === parseInt(id));

  if (!personagem) {
    return (
      <div>
        <Navbar />
        <main>
          <h1>Personagem não encontrado</h1>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="personagem-container">
        <div className="personagem-card">
          <img
            src={personagem.imagem}
            className="personagem-img"
          />
          <div className="personagem-info">
            <h1>{personagem.nome}</h1>
            <p className="personagem-categoria">#{personagem.categoria}</p>
            <blockquote className="personagem-citacao">
              “{personagem.citacao}”
            </blockquote>
            <p className="personagem-descricao">
              {personagem.descricao.split("\n").map((paragrafo, i) => (
                <span key={i}>
                  <ReactMarkdown>{paragrafo}</ReactMarkdown>
                  <br />
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
