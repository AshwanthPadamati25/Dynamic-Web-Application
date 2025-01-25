let startIndexInput = document.getElementById("startIndexInput");
let deleteCountInput = document.getElementById("deleteCountInput");
let itemToAddInput = document.getElementById("itemToAddInput");
let updatedArray = document.getElementById("updatedArray");
let spliceBtn = document.getElementById("spliceBtn");

let arr = [1, 7, 3, 1, 0, 20, 77];

updatedArray.textContent = arr;

let myArray = JSON.stringify(arr);
let parsedMyArray = JSON.parse(myArray);

spliceBtn.onclick = function() {
    onSpliceButton();
    startIndexInput.value = "";
    deleteCountInput.value = "";
    itemToAddInput.value = "";
}

function onSpliceButton() {
    let startIndexInputValue = startIndexInput.value;
    let deleteCountInputValue = deleteCountInput.value;
    let itemToAddInputValue = itemToAddInput.value+"";
    if (startIndexInputValue==="") {
        return alert("Enter the Start Index");
    } else {
        parsedMyArray.splice(startIndexInputValue, deleteCountInputValue, itemToAddInputValue);
        updatedArray.textContent = parsedMyArray;
    }
    startIndexInputValue = "";
    deleteCountInputValue = "";
    itemToAddInputValue = "";
}