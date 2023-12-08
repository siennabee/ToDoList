const removeItem = document.getElementsByClassName("remove");
const markComplete = document.getElementsByClassName("complete");
const form = document.querySelector("#addTodoItem");
const input = document.querySelector("#todoItem");
const newItem = document.querySelector("#list");

let addingLocalStorage = function(){
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    for (let i = 0; i < savedTodos.length; i++) {
    let newTodo = document.createElement("li");
    const itemContent = savedTodos[i].todoItem;
    newTodo.innerHTML = itemContent;
    newItem.appendChild(newTodo);
    }
};

addingLocalStorage();

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
    newItem.appendChild(newTodoItem);
  
    // save to localStorage
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.push({ todoItem: newTodoItem.innerHTML, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));  
});

newItem.addEventListener("click", function(event) {
    let clickedListItem = event.target;
    if (event.target.className === "complete") {
        event.target.parentElement.style.textDecoration = "line-through";
    }
    else if (event.target.className === "remove") {
        event.target.parentElement.remove();
    }
    if (!clickedListItem.isCompleted) {
        clickedListItem.style.textDecoration = "line-through";
        clickedListItem.isCompleted = true;
      } 
    else {
        clickedListItem.style.textDecoration = "none";
        clickedListItem.isCompleted = false;
      }
})