let defuser = document.getElementById("defuser");
let timer = document.getElementById("timer");
let currentCount = 10;


let timeInterval = setInterval(function() {
    currentCount = currentCount - 1;
    timer.textContent = currentCount;

    if (currentCount === 0) {
        timer.textContent = "BOOM!";
        clearInterval(timeInterval);
    }
}, 1000);

defuser.addEventListener("keydown", defuseBomb);
function defuseBomb(event) {
    let defuserValue = defuser.value;
    if (event.key==="Enter" && defuserValue==="defuser") {
        timer.textContent = "You did it!";
        clearInterval(timeInterval);
    }
}