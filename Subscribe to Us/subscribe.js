let subcNameInputEl = document.getElementById("subc_name");
let subcEmailInputEl = document.getElementById("subc_email");
let subcBtnEl = document.getElementById("subc_btn");
let nameWarningEl = document.getElementById("nameWarning");
let emailWarningEl = document.getElementById("emailWarning");
let subcFormEl = document.getElementById("subc-form")

function makeNameFillIntimation(event) {
    if (event.target.value === "") {
        nameWarningEl.style.color = "red";
        nameWarningEl.textContent = "*Required";
    } else {
        nameWarningEl.textContent = "";
    }
}

function makeEmailFillIntimation(event) {
    if (event.target.value === "") {
        emailWarningEl.style.color = "red";
        emailWarningEl.textContent = "*Required";
    } else {
        emailWarningEl.textContent = "";
    }
}

subcFormEl.addEventListener("submit", function(event){
    event.preventDefault();
});

subcNameInputEl.addEventListener("blur", makeNameFillIntimation);
subcEmailInputEl.addEventListener("blur", makeEmailFillIntimation);