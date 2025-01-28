let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainer = document.getElementById("wordsContainer");
let userInput = document.getElementById("userInput");
let errorMsg = document.getElementById("errorMsg");
let addBtn = document.getElementById("addBtn");

let userInputValue = userInput.value;

let spanEl = document.createElement("span");
wordsContainer.appendChild(spanEl);

function errorMessage() {
    errorMsg.textContent = "Please enter a word";
    errorMsg.style.color = "red";
}

addBtn.onclick = function() {
    let spanEl = document.createElement("span");
    wordsContainer.appendChild(spanEl);
    let randomFontSize = Math.ceil(Math.random()*80);
    let userInputText = userInput.value

    if (userInputText==="") {
        errorMessage();
    } else {
        spanEl.textContent = userInputText;
        spanEl.style.fontSize = randomFontSize+"px";
        spanEl.style.marginRight = "40px";
    }
    userInput.value = "";
}