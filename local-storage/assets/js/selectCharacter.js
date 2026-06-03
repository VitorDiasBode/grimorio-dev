document.querySelectorAll(".character-row").forEach((element) => {
    element.addEventListener("click", (event) =>{
        const id = event.currentTarget.getAttribute("data-character-id");
        const character = JSON.parse(localStorage.getItem("characters"))[id];
        const params = new URLSearchParams({"id":id}).toString();
        window.location.href = `pages/create-character.html?${params}`;
    });
})