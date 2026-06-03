export function createTableRows(characters) {

    return `
        ${characters.map((character, index) => {
            return `
                <tr class="character-row" data-character-id=${index}>
                    <td>${character.name}</td>
                    <td>${character.level}</td>
                    <td>${character.class}</td>
                    <td>${character.score}</td>
                </tr>
            `
        }).join(``)}
    `;
}