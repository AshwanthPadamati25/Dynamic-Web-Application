let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let responseStatusEl = document.getElementById("responseStatus");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let responseBodyEl = document.getElementById("responseBody");

function validateRequestUrl() {
    if (requestUrlEl.value === "") {
        requestUrlErrMsgEl.value = "Required*";
    } else {
        requestUrlErrMsgEl.textContent = "";
    }
}

function postRequestMethod(enteredRequestBody) {
    let url = requestUrlEl.value;
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 8d9c935cdb09d04b4d7bf7c8511433ad8bbe87b960463a9010ab6969bc67a775",
        },
        body: enteredRequestBody
    };
    fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        responseStatusEl.value = jsonData.code;
        responseBodyEl.textContent = JSON.stringify(jsonData);
        console.log(JSON.stringify(jsonData.code));
        console.log(JSON.stringify(jsonData));
    });
};

function putRequestMethod(enteredRequestBody) {
    let url = requestUrlEl.value;
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 8d9c935cdb09d04b4d7bf7c8511433ad8bbe87b960463a9010ab6969bc67a775",
        },
        body: enteredRequestBody
    };
    fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        responseStatusEl.value = jsonData.code;
        responseBodyEl.textContent = JSON.stringify(jsonData);
    });
};

let changeUrl = function() {
    url = requestUrlEl.value;
    console.log(url);
}
requestUrlEl.addEventListener("change",changeUrl());


consoleFormEl.addEventListener("submit", function(event){
    event.preventDefault();
    validateRequestUrl();

    console.log(requestMethodEl.value);

    let enteredRequestBody = requestBodyEl.value;
    if (requestMethodEl.value === "POST") {
        postRequestMethod(enteredRequestBody);
    } else if (requestMethodEl.value === "PUT") {
        putRequestMethod(enteredRequestBody);
    }
});

/*
requestBodyEl:
{"id": 60, "name": "Anil", "email": "anil@gmail.com", "gender": "Male", "status": "active"}

{"code":201,"meta":null,"data":{"id":7680801,"name":"Anil6","email":"anil236@gmail.com","gender":"male","status":"active"}}
*/