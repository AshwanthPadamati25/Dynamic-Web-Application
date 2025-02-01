

let loadingEl = document.getElementById("loading");
let requestBodyEl = document.getElementById("requestBody");
let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

function postingData() {
    loadingEl.classList.toggle("d-none");
    requestStatusEl.textContent="";
    httpResponseEl.textContent="";
    let userText = requestBodyEl.value;
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 8d9c935cdb09d04b4d7bf7c8511433ad8bbe87b960463a9010ab6969bc67a775"
        },
        body: userText
    }
    fetch(url, options)
    .then(function(response){
        return response.json(); 
    })
    .then(function(ResponseData){
        loadingEl.classList.toggle("d-none");
        requestStatusEl.textContent = ResponseData.code
        httpResponseEl.textContent = JSON.stringify(ResponseData)
    })
}

sendPostRequestBtnEl.addEventListener("click", postingData);


/*

Bearer 8d9c935cdb09d04b4d7bf7c8511433ad8bbe87b960463a9010ab6969bc67a775

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "gender": "male",
  "status": "active"
}
*/