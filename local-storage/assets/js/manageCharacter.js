manageCharacter();

function manageCharacter(){
    const characterId = parseInt(new URLSearchParams(window.location.search).get("id"));
    
    if (isNaN(characterId)) return;

    let characters = JSON.parse(localStorage.getItem("characters"))
    let character = characters[characterId];
    console.log(characters);

    document.getElementById("title").innerText = "Edit Character";
    
    const form = document.getElementById("character-form");
    form.elements["name"].value = character["name"];
    form.elements["class"].value = character["class"];
    form.elements["level"].value = character["level"];
    form.elements["score"].value = character["score"];

    console.log(form.elements["delete"]);
    form.elements["edit"].disabled = false;
    form.elements["edit"].hidden = false;
    form.elements["delete"].disabled = false;
    form.elements["delete"].hidden = false;

    form.elements["edit"].addEventListener("click", (event) => {
        event.preventDefault();

        const newCharacter = Object.fromEntries(new FormData(form));
        characters[characterId] = newCharacter;
        localStorage.setItem("characters", JSON.stringify(characters));
        window.location.href = "../index.html";
    });

    form.elements["delete"].addEventListener("click", (event) =>{
        event.preventDefault();

        characters.splice(characterId, 1);
        console.log(characters);
        localStorage.setItem("characters", JSON.stringify(characters));
        window.location.href = "../index.html";
    });
}