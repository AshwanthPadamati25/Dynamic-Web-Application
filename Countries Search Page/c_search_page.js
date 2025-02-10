let searchInputEl = document.getElementById("searchInput");
let resultCountriesEl = document.getElementById("resultCountries");
let spinnerEl = document.getElementById("spinner");
let countryBgContainer = document.getElementById("bgContainer");

let countryCardContent = document.createElement("div");
countryCardContent.id = "countryCard";
resultCountriesEl.appendChild(countryCardContent);

let searchInputValue = "";
let searchResultArray = [];

function createAndAppendCountriesContainer(searchResultArray) {

    let countryImgLink = searchResultArray.flag
    let countryNameText = searchResultArray.name
    let countryPopulation = searchResultArray.population

    let countriesContainer = document.createElement("div");
    countriesContainer.classList.add("col-12", "col-md-6");
    countryCardContent.appendChild(countriesContainer);

    let countriesCard = document.createElement("div");
    countriesCard.classList.add("country-card","d-flex","flex-row");
    countriesContainer.appendChild(countriesCard);

    let countryImg = document.createElement("img");
    countryImg.src = countryImgLink;
    countryImg.classList.add("country-flag","mr-3");
    countriesCard.appendChild(countryImg);

    let countryDetailsContainer = document.createElement("div");
    countriesCard.appendChild(countryDetailsContainer);

    let countryName = document.createElement("p");
    countryName.textContent = countryNameText;
    countryName.classList.add("country-name");
    countryDetailsContainer.appendChild(countryName);

    let countryPopulationEl = document.createElement("p");
    countryPopulationEl.textContent = countryPopulation;
    countryPopulationEl.classList.add("country-population");
    countryDetailsContainer.appendChild(countryPopulationEl);
}

function displayCountryDetails() {
    //resultCountriesEl.textContent = "";
    for (let country of searchResultArray) {
        let countryName = country.name;
        if (countryName.includes(searchInputValue)) {
            createAndAppendCountriesContainer(country);
        }
    }
}

function getAllCountryDetails() {
    let option = {method: "GET"}
    fetch("https://apis.ccbp.in/countries-data", option)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonResponse){
        searchResultArray = jsonResponse;
        displayCountryDetails();
    })
}

getAllCountryDetails();

function userEnteringValue(event) {
    searchInputValue = event.target.value;
    resultCountriesEl.textContent = "";
    displayCountryDetails();
}

searchInputEl.addEventListener("keyup",userEnteringValue);




















/*
function displayCountriesDetails() {
    deleteCountryCards();
    for (let country of countriesList) {
        let countryName = country.name;
        //console.log(countryName);
        //console.log(country);
        //console.log(countryName.includes(country));
        if (countryName.includes(searchInputValue)) {
            createAndAppendCountriesContainer(country);
        }
    }
}


function deleteCountryCards() {
    resultCountriesEl.removeChild(countryCardContent)
}

function userEnteringText(event) {
    searchInputValue = event.target.value;
    console.log(searchInputValue);
}

function getCountriesDetails() {
    let configure = {
        method: "GET"
    }
    fetch("https://apis.ccbp.in/countries-data", configure)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonResponse){
        countriesList = jsonResponse;
        displayCountriesDetails();
    });
}
getCountriesDetails();

searchInputEl.addEventListener("keyup", userEnteringText);
*/

//searchInputEl.addEventListener("keyup", onChangeSearchInput);

/*
0. ichina url nundi data techukoni, displaySearchResults ni call chesthundhi
1. for loop countryList lonchi oka country ni teesukoni, aa country card and vati details ni create chesthundi
2. 
*/