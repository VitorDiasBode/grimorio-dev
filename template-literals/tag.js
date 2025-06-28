import chalk from "chalk";

function main(){
    const listaJogadores = [
        {"nome":"Vitor", "pontos":90}, 
        {"nome":"Ana", "pontos":100}, 
        {"nome":"Ashley", "pontos":60}
    ];

    const resultado = definirVencedor`O jogador verde venceu: ${ listaJogadores[0] }, ${ listaJogadores[1] } e ${ listaJogadores[2] }.`;
    console.log(resultado);
}

function definirVencedor(strings, ...jogadores){
    //encontra indice do jogador com mais pontos
    const indexVencedor = jogadores.reduce( (indiceMaior, jogador, index, arr) =>{
        return jogador.pontos > arr[indiceMaior].pontos ? index : indiceMaior; 
    }, 0);

    //formata nomes com cor para vencedor e demais jogadores
    const nomesFormatados = jogadores.map((jogador, index) =>{
        return index === indexVencedor ? chalk.green(jogador.nome) : chalk.red(jogador.nome);
    });

    //monta a string com os nomes formatados
    return strings.reduce( (textoCompleto, palavra, index) => {
        return textoCompleto + palavra + (nomesFormatados[index] ?? '');
    }, '');
}

main()

function myTag(string){
    string[0].trim()
    .split(/\s+/)
    .forEach((word, index) => console.log(`${index} - ${word}`));
}