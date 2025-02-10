let updatePasswordFormEl = document.getElementById("updatePasswordForm");
let newPasswordInputEl = document.getElementById("newPasswordInput");
let confirmPasswordInputEl = document.getElementById("confirmPasswordInput");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");
let updateBtnEl = document.getElementById("updateBtn");

let validateNewPassword = function(event) {
    if (event.target.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
}

let validateConfirmPassword = function(event) {
    if (event.target.value === "") {
        confirmPasswordErrMsgEl.textContent = "Required*";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
    validatePasswordsAreSame();
}

let validatePasswordsAreSame = function() {
    let newPasswordValue = newPasswordInputEl.value;
    let confirmPasswordValue = confirmPasswordInputEl.value;

    if (newPasswordValue!=="" && confirmPasswordValue!=="") {
        if (newPasswordValue !== confirmPasswordValue) {
            confirmPasswordErrMsgEl.textContent = "Password must be same";
        } else if (newPasswordValue === confirmPasswordValue) {
            confirmPasswordErrMsgEl.textContent = "";
        }
    }
}

updateBtnEl.addEventListener("click", validatePasswordsAreSame);
newPasswordInputEl.addEventListener("blur", validateNewPassword);
confirmPasswordInputEl.addEventListener("blur", validateConfirmPassword);

updatePasswordFormEl.addEventListener("submit", function(event){
    event.preventDefault();
})