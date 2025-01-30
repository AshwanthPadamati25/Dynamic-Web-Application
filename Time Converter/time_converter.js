let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");

let timeInSeconds = document.getElementById("timeInSeconds");
let errorMsg = document.getElementById("errorMsg");
let container2 = document.getElementById("Container2")

function convertTime(hours,minutes) {
    let hoursInSec = hours*60*60;
    let minInSec = minutes*60;
    let totalSec = hoursInSec + minInSec;
    
    return totalSec;
}

convertBtn.onclick = function() {
    let hoursInputValue = hoursInput.value;
    let minutesInputValue = minutesInput.value;

    let convertedTime = convertTime(hoursInputValue, minutesInputValue);
    
    if (hoursInputValue==="" && minutesInputValue==="") {
        errorMsg.textContent = "Please Enter the valid number of hours";
    } else if (hoursInputValue==="") {
        errorMsg.textContent = "Please Enter the valid number of hours";
    } else if (minutesInputValue==="") {
        errorMsg.textContent = "Please Enter the valid number of minutes";
    } else {
        timeInSeconds.classList.add("time-in-seconds","mt-4");
        timeInSeconds.textContent = convertedTime + "s";
        container2.removeChild(convertBtn);
        errorMsg.textContent = "";
    }
}