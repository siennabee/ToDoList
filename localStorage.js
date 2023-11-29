const todoForm = document.getElementById("addTodoItem");
const list = document.getElementById("list");

// retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTodo = document.createElement("li");
  // let addButtonOne = document.createElement("button");
  // let addButtonTwo = document.createElement("button");
  // addButtonOne.classList.add("complete");
  // addButtonTwo.classList.add("remove");
  // addButtonOne.innerText = "Mark as Complete";
  // addButtonTwo.innerText = "Remove";
  // newTodo.appendChild(addButtonOne);
  // newTodo.appendChild(addButtonTwo);
  newTodo.innerText = savedTodos[i].todoItem;
  newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = "line-through";
  }
  list.appendChild(newTodo);
}

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let newTodo = document.createElement("li");
  // let addButtonOne = document.createElement("button");
  // let addButtonTwo = document.createElement("button");
  // addButtonOne.classList.add("complete");
  // addButtonTwo.classList.add("remove");
  // addButtonOne.innerText = "Mark as Complete";
  // addButtonTwo.innerText = "Remove";
  // newTodo.appendChild(addButtonOne);
  // newTodo.appendChild(addButtonTwo);
  let taskValue = document.getElementById("todoItem").value;
  newTodo.innerText = taskValue;
  newTodo.isCompleted = false;
  todoForm.reset();
  list.appendChild(newTodo);

  // save to localStorage
  savedTodos.push({ todoItem: newTodo.innerText, isCompleted: false });
  localStorage.setItem("todos", JSON.stringify(savedTodos));
});

list.addEventListener("click", function(event) {
  let clickedListItem = event.target;

  if (!clickedListItem.isCompleted) {
    clickedListItem.style.textDecoration = "line-through";
    clickedListItem.isCompleted = true;
  } else {
    clickedListItem.style.textDecoration = "none";
    clickedListItem.isCompleted = false;
  }
})
  // breaks for duplicates - another option is to have dynamic IDs
//   for (let i = 0; i < savedTodos.length; i++) {
//     if (savedTodos[i].todoItem === clickedListItem.innerText) {
//       savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
//       localStorage.setItem("todos", JSON.stringify(savedTodos));
//     }
//   }
// });