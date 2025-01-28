let numbers = [17, 31, 77, 20, 63];

let userInput = document.getElementById("userInput");
let findBtn = document.getElementById("findBtn");
let indexOfNumber = document.getElementById("indexOfNumber");

findBtn.onclick = function() {
    let IndexValue = numbers.indexOf(parseInt(userInput.value));
    indexOfNumber.textContent = IndexValue;
}