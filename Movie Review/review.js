
let movieReviewContent = document.getElementById("movieReviewContent");
let enteredMovie = document.getElementById("titleInput");
let enteredReview = document.getElementById("reviewTextarea");

let pasteReviewContainer = document.createElement("div");
pasteReviewContainer.id = "PasteReviewContainer";
pasteReviewContainer.classList.add("m-left");
movieReviewContent.appendChild(pasteReviewContainer);

let movieName = document.createElement("p");
movieName.setAttribute("class","movie-title");
pasteReviewContainer.appendChild(movieName);

let movieReview = document.createElement("p");
movieReview.classList.add("movie-review");
pasteReviewContainer.appendChild(movieReview);

let addButton = document.getElementById("addButton");
addButton.onclick = function() {
    movieName.textContent = "Movie Name: " + enteredMovie.value;
    movieReview.textContent = "Movie Review: " + enteredReview.value;
    enteredMovie.value = "";
    enteredReview.value = "";
}