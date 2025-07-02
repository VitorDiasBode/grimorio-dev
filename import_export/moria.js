import comitiva from "./rivendell.js";

const gandalf = comitiva.find( (membro) => membro.nome.includes("Gandalf") );

console.log(`A comitiva entre em Moria quando ${gandalf.nome} fala 'AMIGO'`);