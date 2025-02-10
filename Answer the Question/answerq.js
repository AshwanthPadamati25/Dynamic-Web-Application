let questionsFormEl = document.getElementById("questionsForm");
console.log(questionsFormEl);
let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaiEl = document.getElementById("cityMumbai");

let submitBtnEl = document.getElementById("submitBtn");
let resultMsgEl = document.getElementById("resultMsg");


let responseToAnswer = function() {
    let isOptionSelected = cityHyderabadEl.checked === false && cityChennaiEl.checked === false && cityDelhiEl.checked === false && cityMumbaiEl.checked === false;
    console.log(isOptionSelected);
    let isCityDelhiElChecked = cityDelhiEl.checked;
    resultMsgEl.style.color = "red";
    if (isCityDelhiElChecked) {
        resultMsgEl.textContent = "Correct Answer!";
        resultMsgEl.style.color = "green";
    } else if (isOptionSelected===true) {
        resultMsgEl.textContent = "Please select the answer!";
    } else {
        resultMsgEl.textContent = "Wrong Answer!";
    }
}

questionsFormEl.addEventListener("submit", function(event){
    event.preventDefault();
    responseToAnswer();
});