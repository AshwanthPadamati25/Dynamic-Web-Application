
let searchInputEl = document.getElementById("searchInput");
let lbmFormEl = document.getElementById("lbmForm");
let searchResultsEl = document.getElementById("searchResults");

let lbmPopularBooksHeadingEl = document.getElementById("lbmPopularBooksHeading");

let spinnerEl = document.getElementById("spinner");

let allBooksContainerEl = document.createElement("div");
allBooksContainerEl.id = "allBooksContainer";
searchResultsEl.appendChild(allBooksContainerEl);

let uniqueId=0;
let uniqueIdArray = [];

function removePreviousBooks() {
    let numArray = [1,2,3,4,5,6,7,8,9,10];
    for (let eachId of numArray) {
        let containerId = "bookContainer" + eachId;
        let currentContainer = document.getElementById(containerId);
        allBooksContainerEl.removeChild(currentContainer);
    }
    uniqueId = 0;
    uniqueIdArray = [];
}

let createAndAppendBooks = function(book1,book2) {
    uniqueId = uniqueId + 1;
    uniqueIdArray.push("bookContainer"+uniqueId);

    lbmPopularBooksHeadingEl.classList.remove("d-none");

    let booksContainerEl = document.createElement("div");
    booksContainerEl.id = "bookContainer"+uniqueId;
    booksContainerEl.classList.add("d-flex","flex-row","justify-content-between","mt-3")
    allBooksContainerEl.appendChild(booksContainerEl);

    let book1El = document.createElement("div");
    booksContainerEl.appendChild(book1El);

    let book1Img = document.createElement("img");
    book1Img.src = book1.imageLink;
    book1Img.classList.add("lbm-book1-img","mr-3")
    book1El.appendChild(book1Img);

    let book1Author = document.createElement("h1");
    book1Author.textContent = book1.author;
    book1Author.classList.add("lbm-book1-author","text-center","mt-2");
    book1El.appendChild(book1Author);

    let book2El = document.createElement("div");
    booksContainerEl.appendChild(book2El);

    let book2Img = document.createElement("img");
    book2Img.src = book2.imageLink;
    book2Img.classList.add("lbm-book1-img")
    book2El.appendChild(book2Img);

    let book2Author = document.createElement("h1");
    book2Author.textContent = book2.author;
    book2Author.classList.add("lbm-book1-author","text-center","mt-2");
    book2El.appendChild(book2Author);

}

let returnedArray = function(titledBooksArray) {
    if (titledBooksArray.length === 0) {
        lbmPopularBooksHeadingEl.textContent = "No Search Results Found";
        lbmPopularBooksHeadingEl.setAttribute("class","text-center");
    } else {
        let bisideBooks = [];
        for (let titledBook of titledBooksArray) {
            bisideBooks.push(titledBook);
            if (bisideBooks.length === 2) {
                createAndAppendBooks(bisideBooks[0],bisideBooks[1]);
                bisideBooks = [];
            }
        }
    }
}

let getSearchedBookDetails = function() {
    lbmPopularBooksHeadingEl.classList.add("d-none"); 
    spinnerEl.classList.remove("d-none"); 

    let searchInput = searchInputEl.value;
    let url = "https://apis.ccbp.in/book-store?title=" + searchInput;
    let options = {
        method: "GET"
    };

    fetch(url, options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        spinnerEl.classList.add("d-none");
        let titledBooksArray = jsonData.search_results;
        returnedArray(titledBooksArray);
    });
};


let = numberOfTimesCalled = 0;
lbmFormEl.addEventListener("submit", function(event){
    event.preventDefault();
    getSearchedBookDetails();

    numberOfTimesCalled = numberOfTimesCalled + 1;
    if (numberOfTimesCalled > 1) {
        removePreviousBooks();
    }
});