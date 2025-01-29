let userInput = document.getElementById("userInput");
let keyCodeList = document.getElementById("keyCodeList");

let keyCodeValues = document.createElement("li");
keyCodeList.appendChild(keyCodeValues);

userInput.addEventListener("keydown", addKeyCodeValues);

function addKeyCodeValues(event) {
    let eventKey = event.key;
    let eventKeyCode = eventKey.charCodeAt();

    let keyCodeValues = document.createElement("li");
    keyCodeValues.textContent = eventKeyCode;
    keyCodeList.appendChild(keyCodeValues);
};