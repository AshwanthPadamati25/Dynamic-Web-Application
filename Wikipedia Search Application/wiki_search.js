let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");

function createAndAppendContent(searchResult) {
    
    let resultTitle = document.createElement("a");
    resultTitle.classList.add("result-title");
    resultTitle.textContent = searchResult.title;
    resultTitle.href = searchResult.link;
    resultTitle.target = "_blank";
    searchResultsEl.appendChild(resultTitle);

    let brEl = document.createElement("br");
    searchResultsEl.appendChild(brEl);

    let searchLink =  document.createElement("a");
    searchLink.classList.add("result-url");
    searchLink.href = searchResult.link;
    searchLink.target = "_blank";
    searchLink.textContent = searchResult.link;
    searchResultsEl.appendChild(searchLink);

    let searchDescription = document.createElement("p");
    searchDescription.textContent = searchResult.description;
    searchDescription.classList.add("link-description");
    searchResultsEl.appendChild(searchDescription);
}

function getInput(event) {
    let searchInput = searchInputEl.value;
    let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
    let option = {
        method: "GET"
    }
    if (event.key === "Enter") {
        fetch(url, option)
        .then(function(res){
            return res.json();
        })
        .then(function(jsonResponse){
            let Response = jsonResponse.search_results;
            let responseArrayLength = Response.length;

            for (let currentCount = 0;currentCount < responseArrayLength; currentCount++) {
                createAndAppendContent(Response[currentCount]);
            };
        });
    }
}

searchInputEl.addEventListener("keydown", getInput)