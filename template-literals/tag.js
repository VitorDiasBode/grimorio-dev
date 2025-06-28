import chalk from "chalk";
import stripAnsi from "strip-ansi";

function main(){
    // console.log( myTag`A Loba se chama Ana` );
    const Listajogadores = [{"nome":"Ana", "pontos":100}, {"nome":"Vitor", "pontos":90}, {"nome":"Ashley", "pontos":60}];
    console.log(definirVencerdor`Os jogadores são: ${ Listajogadores[2] }, ${ Listajogadores[0] } e ${ Listajogadores[1] }`);
}

function definirVencerdor(string, ...jogadores){
    let indexJogadorVencedor = 0;
    jogadores.forEach((jogador, index) => {
        if(jogador.pontos > jogadores[indexJogadorVencedor].pontos){indexJogadorVencedor = index} 
         jogador.nome = chalk.red(jogador.nome);
    });

    jogadores[indexJogadorVencedor].nome = chalk.green(stripAnsi(jogadores[indexJogadorVencedor].nome));

    console.log(string.reduce( (textoCompleto, palavra, index) => {
        const nomeJogador = jogadores[index] !== undefined ? jogadores[index].nome : "";
        return textoCompleto + palavra + nomeJogador;
    }, ''));

}

main()

function myTag(string){
    string[0].trim()
    .split(/\s+/)
    .forEach((word, index) => console.log(`${index} - ${word}`));
}