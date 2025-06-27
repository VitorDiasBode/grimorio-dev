import chalk from "chalk";

function main(){
    // console.log( myTag`A Loba se chama Ana` );
    const jogadores = [{"nome":"Ana", "pontos":100}, {"nome":"Vitor", "pontos":90}];
    console.log(definirVencerdor`Os jogadores são ${ jogadores[0] } e ${ jogadores[1] }`);
}

function myTag(string){
    string[0].trim()
    .split(/\s+/)
    .forEach((word, index) => console.log(`${index} - ${word}`));
}

function definirVencerdor(string, jogador1, jogador2){
    console.log(jogador1.pontos > jogador2.pontos ? chalk.green(jogador1.nome) : chalk.green(jogador2.nome) );
      

}

main()
