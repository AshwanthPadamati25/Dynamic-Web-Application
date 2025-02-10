
let quoteDisplayId = document.getElementById("quoteDisplay");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let liquidSecondsEl = document.getElementById("liquidSeconds");
let resultEl = document.getElementById("result");
let spinnerEl = document.getElementById("spinner");
let typingTextContentEl = document.getElementById("typingTextContent");


submitBtnEl.addEventListener("click", function(event){
    let enteredText = quoteInputEl.value;
    let challengeText = quoteDisplayId.textContent;
    console.log(enteredText);
    console.log(challengeText);
    if (challengeText === enteredText) {
        clearInterval(myInterval);
        resultEl.textContent = "You typed in " + liquidSecondsEl.textContent + " seconds";
    } else {
        resultEl.textContent = "You typed Incorrect Sentence";
    }
});

let count = 0;
let timer = function() {
    function myTimer() {
        count = count + 1;
        liquidSecondsEl.textContent = count;
        console.log(count);
    }
    myInterval = setInterval(myTimer,1000);
}



let getRandomQuote = function() {
    let options = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/random-quote",options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        let randomQuote = jsonData.content;
        quoteDisplayId.textContent = randomQuote;
        spinnerEl.classList.add("d-none");
        typingTextContentEl.classList.remove("d-none");
    });
}
resetBtnEl.addEventListener("click", onReset);
function onReset() {
    spinnerEl.classList.remove("d-none");
    typingTextContentEl.classList.add("d-none");
    getRandomQuote();
    count = -1;
}
getRandomQuote();
timer();