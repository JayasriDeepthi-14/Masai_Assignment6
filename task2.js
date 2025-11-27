// L0 - Basic DOM Manipulation

const ul = document.querySelector("#itemList");
const button = document.querySelector("#addBtn");
button.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    ul.appendChild(newItem);
    styleListItems(); 
});
function styleListItems() {
    const items = ul.querySelectorAll("li");
    items.forEach((li, index) => {
        const position = index + 1;
        if (position % 2 !== 0) {
            li.style.fontWeight = "bold";
            li.style.color = "blue";
            li.style.fontStyle = "normal";
        } else {
            li.style.fontStyle = "italic";
            li.style.color = "red";
            li.style.fontWeight = "normal";
        }
    });
}
styleListItems();