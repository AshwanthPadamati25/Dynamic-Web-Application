
let bgContainer = document.getElementById("bgContainer");
let heading = document.getElementById("heading");
let themeUserInput = document.getElementById("themeUserInput");

themeUserInput.addEventListener("keydown", changeTheme);

function changeTheme(event) {
    let userInputValue = themeUserInput.value;
    if ((userInputValue === "Dark") && (event.key === "Enter")) {
        bgContainer.classList.add("dark-bg-container");
        heading.style.color = "white";
    } else if ((userInputValue === "Light") && (event.key === "Enter")) {
        bgContainer.classList.add("light-bg-container");
        heading.style.color === "#014d40";
    } else if (event.key==="Enter") {
        alert("Enter the valid theme");
    }
}
