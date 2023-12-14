const removeItem = document.getElementsByClassName("remove");
const markComplete = document.getElementsByClassName("complete");
const form = document.querySelector("#addTodoItem");
const input = document.querySelector("#todoItem");
const newItem = document.querySelector("#list");

// retrieves items from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

// adds localStorage
let addingLocalStorage = function(){
    for (let i = 0; i < savedTodos.length; i++) {
    let newTodo = document.createElement("li");
    const itemContent = savedTodos[i].todoItem;
    newTodo.innerHTML = itemContent;
    // newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
    // newTodo.setAttribute("id", savedTodos[i].id);

    // if (newTodo.isCompleted) {
    //     newTodo.style.textDecoration = "line-through";
    // }

    newItem.appendChild(newTodo);
    }
};

addingLocalStorage();

for (let btn of markComplete) {
    btn.addEventListener("click", function(e) {
        e.target.parentElement.style.textDecoration = "line-through";
        // isCompleted = true;
    });
};

for (let btn of removeItem) {
    btn.addEventListener("click", function(e) {
        e.target.parentElement.remove();
        // isCompleted = true;
        // if (e.target.parent.HTML === savedTodos.target) {
        //     localStorage.removeItem(e.target.parentElement)
        // }
        // // loop through savedtodos and find the items that have todoitem key = e.target.parent.HTML
        // console.log(e.target.parentElement.innerHTML);
        // console.log(savedTodos);
    });
};

form.addEventListener("submit", function(e){
    e.preventDefault();
    const newTodo = document.createElement("li");
    const addButtonOne = document.createElement("button");
    const addButtonTwo = document.createElement("button");
    // newTodo.setAttribute("id", savedTodos.length + 1);
    addButtonOne.classList.add("complete");
    addButtonTwo.classList.add("remove");
    newTodo.innerText = input.value;
    newTodo.isCompleted = false;
    addButtonOne.innerText = "Mark as Complete";
    addButtonTwo.innerText = "Remove";
    newTodo.appendChild(addButtonOne);
    newTodo.appendChild(addButtonTwo);
    input.value = "";
    newItem.appendChild(newTodo);
  
    // save to localStorage
    savedTodos.push({ todoItem: newTodo.innerHTML, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));  
});

newItem.addEventListener("click", function(event) {
    let clickedListItem = event.target;
    if (event.target.className === "complete") {
        event.target.parentElement.style.textDecoration = "line-through";
        event.target.isCompleted = true;
    }
    else if (event.target.className === "remove") {
        event.target.parentElement.remove();
        event.target.isCompleted = true;
    }
    if (!clickedListItem.isCompleted) {
        clickedListItem.style.textDecoration = "line-through";
        clickedListItem.isCompleted = true;
      } 
    else {
        clickedListItem.style.textDecoration = "none";
        clickedListItem.isCompleted = false;
    }
    // for (let i = 0; i < savedTodos.length; i++) {
    //     if (savedTodos[i].id === clickedListItem.id) {
    //       savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
    //       localStorage.setItem("todos", JSON.stringify(savedTodos));
    //     }
    // };
});