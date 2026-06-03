createCharacter();

function createCharacter(){
    const characterId = parseInt(new URLSearchParams(window.location.search).get("id"));
    
    if (!isNaN(characterId)) return;
    console.log("erro")

    const form = document.getElementById("character-form");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
    
        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData);
        const characters = JSON.parse(localStorage.getItem("characters"));
    
        // parsing data
        formObject.level = parseInt(formObject.level);
        formObject.score = parseFloat(formObject.score);
    
        characters.push(formObject);
        localStorage.setItem("characters", JSON.stringify(characters));
    
        window.location.href = "../index.html";
    });
}
