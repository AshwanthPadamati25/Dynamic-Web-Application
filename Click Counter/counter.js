let clickCounterContainer = document.getElementById("clickCounterContainer");
let incrementButton = document.getElementById("incrementBtn");
let counterValue = document.getElementById("counterValue");

let noOfTimesClicked = parseInt(counterValue.textContent);
incrementButton.onclick = function() {
    noOfTimesClicked = noOfTimesClicked + 1;
    counterValue.textContent = noOfTimesClicked;
    localStorage.setItem("clickCount", counterValue.textContent);
}
