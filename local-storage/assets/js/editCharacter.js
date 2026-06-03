
editCharacter();

function editCharacter(){
    const characterId = parseInt(new URLSearchParams(window.location.search).get("id"));
    
    if (isNaN(characterId)) return;

    let character = JSON.parse(localStorage.getItem("characters"))[characterId];

    document.getElementById("title").innerText = "Edit Character";
    
    const form = document.getElementById("character-form");
    form.elements["name"].value = character["name"];
    form.elements["class"].value = character["class"];
    form.elements["level"].value = character["level"];
    form.elements["score"].value = character["score"];
    form.elements["action"].innerText = "Edit";
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    form.appendChild(deleteButton);

    
}