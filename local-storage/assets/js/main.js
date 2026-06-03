const stored = localStorage.getItem("characters");

if (!stored){
    localStorage.setItem("characters", JSON.stringify([]));
}