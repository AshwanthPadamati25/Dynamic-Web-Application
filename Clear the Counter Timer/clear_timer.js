let clearBtnEl = document.getElementById("clearBtn");
let counterValue = document.getElementById("counterValue");

let counter = 0;
counterValue.textContent = counter;

let counterTimer = function() {
  counter = counter + 1;
  console.log(counter);
  counterValue.textContent = counter;
};

let intervalId = setInterval(counterTimer, 1000);

function clearTimer() {
    clearInterval(intervalId);
}

clearBtnEl.addEventListener("click", clearTimer);