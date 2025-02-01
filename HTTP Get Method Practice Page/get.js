let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");


let options = {method: "GET"};
let url = "https://gorest.co.in/public-api/users";

function fetchingGorestData() {
    toggleLoad();
    fetch(url, options)
    .then(function(response){
        return response.json(); 
    })
    .then(function(Responses){
        requestStatusEl.textContent = Responses.code;
        httpResponseEl.textContent = JSON.stringify(Responses.data);
        toggleLoad();
    });
}

function toggleLoad() {
    loadingEl.classList.toggle("d-none");
}

sendGetRequestBtnEl.addEventListener("click", fetchingGorestData);