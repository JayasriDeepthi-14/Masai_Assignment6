// L0 - Understanding and Navigating the DOM

const heading = document.getElementById("mainTitle");
heading.textContent = "Welcome to the DOM World!";
const paragraphs = document.getElementsByTagName("p");
for (let p of paragraphs) {
    p.style.color = "blue";
}
const containerDiv = document.querySelector(".container");
containerDiv.style.backgroundColor = "yellow";