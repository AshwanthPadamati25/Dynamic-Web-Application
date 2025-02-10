
let bookmarkFormEl = document.getElementById("bookmarkForm");

let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");

let submitBtnEl = document.getElementById("submitBtn");

let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");

let bookmarkSitesEl = document.getElementById("bookmarkSites");

let bookmarkSites = JSON.parse(localStorage.getItem("bookmarkSites")) || [];
//localStorage.clear();

function displayBookMarks() {
    bookmarkSitesEl.textContent = "";
    let bookmarkSitesArray = JSON.parse(localStorage.getItem("bookmarkSites"));
    for (let bookmarkSite of bookmarkSites) {
        createAndAppendBookmarkList(bookmarkSite);
    };
}

function createAndAppendBookmarkList(siteDetailsObj) {
    let lsSiteName = siteDetailsObj.name;
    let lsSiteUrl = siteDetailsObj.url;

    bookmarkSitesEl.classList.add("bookmark-card-form-container");

    let bookmarkSite = document.createElement("li");
    bookmarkSite.classList.add("bookmark-item-container","p-3","pt-0");
    bookmarkSitesEl.appendChild(bookmarkSite);

    let siteNameEl = document.createElement("h1");
    siteNameEl.classList.add("site-name");
    siteNameEl.textContent = lsSiteName;
    bookmarkSite.appendChild(siteNameEl);

    let siteUrlEl = document.createElement("a");
    siteUrlEl.textContent = lsSiteUrl;
    siteUrlEl.href = lsSiteUrl;
    siteUrlEl.setAttribute("target", "_blank");
    bookmarkSite.appendChild(siteUrlEl);
}

function validateSiteName() {
    if (siteNameInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
}

function validateSiteUrl() {
    if (siteUrlInputEl.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
}

function storingSiteDetails(siteName,siteUrl) {
    let siteDetailsObj = {
        name: siteName,
        url: siteUrl,
    }
    bookmarkSites.push(siteDetailsObj);
    localStorage.setItem("bookmarkSites", JSON.stringify(bookmarkSites));
    displayBookMarks();
};
 
bookmarkFormEl.addEventListener("submit", function(event){
    event.preventDefault();
    validateSiteName();
    validateSiteUrl();

    let siteName = siteNameInputEl.value;
    let siteUrl = siteUrlInputEl.value;
    if (siteNameInputEl.value !== "" && siteUrlInputEl.value !== "") {
        storingSiteDetails(siteName,siteUrl);
    }
});

displayBookMarks();
