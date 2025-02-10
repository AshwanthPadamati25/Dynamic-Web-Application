
let addUserFormEl = document.getElementById("addUserForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let validateNameEl = function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "*Required";
    } else {
        nameErrMsgEl.textContent = "";
    }
}

let validateEmailEl = function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "*Required";
    } else {
        emailErrMsgEl.textContent = "";
    }
}

nameEl.addEventListener("blur", validateNameEl);
emailEl.addEventListener("blur", validateEmailEl);

addUserFormEl.addEventListener("submit", function(event){
    event.preventDefault();
});