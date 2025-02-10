
let addUserFormEl = document.getElementById("addUserForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let statusEl = document.getElementById("status");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");


let validateNameEl = function() {
    if (nameEl.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
}

let validateEmailEl = function(jsonData) {
    if (emailEl.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else if (jsonData.code === 422) {
        emailErrMsgEl.textContent = "Email Already Exists";
    } else {
        emailErrMsgEl.textContent = "";
    }
}

let postUserDetails = function(userDetails) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 8d9c935cdb09d04b4d7bf7c8511433ad8bbe87b960463a9010ab6969bc67a775"
        },
        body: JSON.stringify(userDetails)
    }

    fetch("https://gorest.co.in/public-api/users", options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        console.log(jsonData);
        validateEmailEl(jsonData);
    });
}

function getStatusVal(userDetails) {
    userDetails.status = statusEl.value
}

function getGender(userDetails) {
    if (genderMaleEl.checked) {
        userDetails.gender = "Male"
    } else {
        userDetails.gender = "Female"
    }
}

statusEl.addEventListener("change", getStatusVal);
genderMaleEl.addEventListener("change", getGender);
genderFemaleEl.addEventListener("change", getGender);

addUserFormEl.addEventListener('submit', function(event){
    event.preventDefault();
    validateNameEl();
    validateEmailEl();

    let userDetails = {
        name: nameEl.value,
        email: emailEl.value,
        status: "Active",
        gender: "Male"
    }
    getStatusVal(userDetails);
    getGender(userDetails);

    postUserDetails(userDetails);
});

// asu@gmail.com id:7684496