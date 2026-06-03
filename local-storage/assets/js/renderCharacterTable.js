import { createTableRows } from "../../components/characterTableRows.js";

renderCharactersTable();

function renderCharactersTable() {
    const characters = JSON.parse(localStorage.getItem("characters"));
    
    const tableRows = createTableRows(characters);
    document.querySelector(".table-characters").innerHTML = tableRows;

}