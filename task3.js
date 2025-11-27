// L1 - Interactive DOM Manipulation

// Select DOM elements
const colorInput = document.getElementById("colorInput");
const textInput = document.getElementById("textInput");
const bgBtn = document.getElementById("bgBtn");
const textBtn = document.getElementById("textBtn");
const box = document.getElementById("myBox");
// Function for validating color
function isValidColor(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== "";
}
// Task 1: Change Background Color
bgBtn.addEventListener("click", () => {
    const color = colorInput.value.trim();

    if (isValidColor(color)) {
        box.style.backgroundColor = color;
    } else {
        alert("Invalid color name!");
    }
});
// Task 2: Update Text
textBtn.addEventListener("click", () => {
    const newText = textInput.value.trim();

    if (newText === "") {
        alert("Please enter some text!");
    } else {
        box.textContent = newText;
    }
});