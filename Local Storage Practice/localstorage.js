

let msg = document.getElementById("msg");
let saveBtn = document.getElementById("saveBtn");
let clearBtn = document.getElementById("clearBtn");

saveBtn.onclick = function() {
    localStorage.setItem("userInput", msg.value);
}

let getStoredItem = localStorage.getItem("userInput");
console.log(getStoredItem);
if (getStoredItem==="") {
    msg.value = "";
} else {
    msg.value = getStoredItem;
}

clearBtn.onclick = function() {
    msg.value = "";
    localStorage.removeItem("userInput");
}