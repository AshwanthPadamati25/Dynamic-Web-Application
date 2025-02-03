let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

function isEventKeyEntered(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.toggle("d-none");
        factEl.textContent="";
        getFactData();
    }
}

function getFactData() {
    let userEnteredValue = userInputEl.value;

    if (userEnteredValue==="") {
        alert("Enter a Number");
    } else {
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userEnteredValue;
        let options = {
            method: "GET"
        }
        fetch(url, options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonResponse){
            spinnerEl.classList.toggle("d-none");
            factEl.textContent = jsonResponse.fact;
        });
    }
}

userInputEl.addEventListener("keydown", isEventKeyEntered);


/*
    let userInputValue = userInputEl.value;
    if (userInputValue==="") {
        alert("Enter a Number");
    } else {
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputValue;
        let configure = {
            method: "GET"
        }
        
    }
*/

