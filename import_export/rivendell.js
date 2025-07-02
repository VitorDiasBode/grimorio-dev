import * as hobbits from './shire.js';

const aragorn = {
  nome: "Aragorn II (Strider)",
  natal: "Rivendell (foi criado lá), origem: Númenor/Arnor",
  arma: "Andúril (reconstruída de Narsil)" 
};
const boromir = {
  nome: "Boromir",
  natal: "Gondor",
  arma: "Espada longa e escudo" 
};
const legolas = {
  nome: "Legolas",
  natal: "Floresta das Trevas, Mirkwood",
  arma: "Arco dos Galadhrim" 
};
const gimli = {
  nome: "Gimli",
  natal: "Montanhas Azuis",
  arma: "Machado de batalha" 
};
const gandalf = {
  nome: "Gandalf o Cinzento",
  natal: "Valinor (Maiar)",
  arma: "Glamdring (espada) e cajado" 
};

const comitiva = [aragorn, boromir, legolas, gimli, gandalf];

comitiva.push(...Object.values(hobbits));
console.log(`A comitiva é formada com ${comitiva.map((membro) => membro.nome).join(', ')}`);

export default comitiva;