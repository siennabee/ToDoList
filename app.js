const removeItem = document.getElementsByClassName("remove");
const markComplete = document.getElementsByClassName("complete");
const form = document.querySelector("#addTodoItem");
const input = document.querySelector("#todoItem");
const newItem = document.querySelector("#list");

for (let btn of markComplete) {
    btn.addEventListener("click", function(e) {
        e.target.parentElement.style.textDecoration = "line-through";
    });
};

for (let btn of removeItem) {
    btn.addEventListener("click", function(e) {
        e.target.parentElement.remove();
    });
};

newItem.addEventListener("click", function(event) {
    if (event.target.className === "complete") {
        event.target.parentElement.style.textDecoration = "line-through";
    }
    else if (event.target.className === "remove") {
        event.target.parentElement.remove();
    }
});

form.addEventListener("submit", function(e){
    e.preventDefault();
    const newTodoItem = document.createElement("li");
    const addButtonOne = document.createElement("button");
    const addButtonTwo = document.createElement("button");
    addButtonOne.classList.add("complete");
    addButtonTwo.classList.add("remove");
    newTodoItem.innerText = input.value;
    addButtonOne.innerText = "Mark as Complete";
    addButtonTwo.innerText = "Remove";
    newTodoItem.appendChild(addButtonOne);
    newTodoItem.appendChild(addButtonTwo);
    input.value = "";
    list.appendChild(newTodoItem);
});

