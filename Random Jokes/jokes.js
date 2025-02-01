let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function displayRandomJoke() {
    spinnerEl.classList.toggle("d-none");
    let options = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/jokes/random", options)
    .then(function(response){
        return response.json();
    })
    .then(function(Response){
        spinnerEl.classList.toggle("d-none");
        jokeTextEl.textContent = Response.value;
    });
}

jokeBtnEl.addEventListener("click", displayRandomJoke);