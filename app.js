// const removeItem = document.getElementsByClassName("remove");
// const markComplete = document.getElementsByClassName("complete");
const form = document.getElementById('addTodoItem');
const input = document.getElementById('todoItem');
const todoList = document.querySelector('#list');

// retrieves items from localStorage or creates an empty array if there are no items
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];

// adds localStorage
for (let i = 0; i < savedTodos.length; i++) {
    let newTodo = document.createElement('li');

    // assign the value directly to newTodo.innerText
    newTodo.innerText = savedTodos[i].todoItem;

    // map the isCompleted attribute from localStorage to the newTodo element
    newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;

    // also map the dynamic id from localStorage to the newTodo element
    newTodo.setAttribute('id', savedTodos[i].id);

    // checks for each newTodo item, what's the status of isCompleted and applies the appropriate style
    if (newTodo.isCompleted) {
        newTodo.style.textDecoration = 'line-through';
    }

    //  create the two buttons for each newTodo item and define the event handler.
    let completeBtn = document.createElement('button');
    completeBtn.innerText = 'Mark as Complete';
    completeBtn.classList.add('complete');
    completeBtn.addEventListener('click', markAsCompleteTodoItem);

    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.classList.add('remove');
    removeBtn.addEventListener('click', removeTodoItem);

    // append the buttons to the newTodo <li> element.
    newTodo.appendChild(completeBtn);
    newTodo.appendChild(removeBtn);

    // append the newTodo <li> element to the <ul> element in the DOM.
    todoList.appendChild(newTodo);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let newTodo = document.createElement('li');

    // grab the new todo item value from the input field
    let taskValue = input.value;
    newTodo.innerText = taskValue; // assign to newTodo item innerText
    newTodo.isCompleted = false; // set isCompleted to false initially

    // set dynamic id to each list item created
    let dynamicID = savedTodos.length + 1;
    newTodo.setAttribute('id', dynamicID);

    let newTodoObject = {
        id: dynamicID,
        todoItem: taskValue,
        isCompleted: false,
    };
    // add the new todo object into savedTodos array
    savedTodos.push(newTodoObject);

    // save to local storage
    localStorage.setItem('todos', JSON.stringify(savedTodos));

    let completeBtn = document.createElement('button');
    completeBtn.innerText = 'Mark as Complete';
    completeBtn.classList.add('complete');
    completeBtn.addEventListener('click', markAsCompleteTodoItem);

    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.classList.add('remove');
    removeBtn.addEventListener('click', removeTodoItem);

    // append children buttons to new todo item element
    newTodo.appendChild(completeBtn);
    newTodo.appendChild(removeBtn);

    // reset the form
    form.reset();

    // append the new todo item to the DOM.
    todoList.appendChild(newTodo);
});

function removeTodoItem(e) {
    let targetTodoItemId = e.target.parentElement.id;

    // Find the index we need to remove.

    for (let i = 0; i < savedTodos.length; i++) {
        if (savedTodos[i].id == targetTodoItemId) {
            // Then use splice to remove the item from the array.
            savedTodos.splice(i, 1);
            break; //  exit the loop once we found the matching ID.
        }
    }

    // Save the modified array into your local storage.
    localStorage.setItem('todos', JSON.stringify(savedTodos));

    // Remove the todo item from the DOM.
    e.target.parentElement.remove();
}

function markAsCompleteTodoItem(e) {
    let targetTodoItem = e.target.parentElement;

    // Modify the DOM styling as per isCompleted status.
    if (!targetTodoItem.isCompleted) {
        targetTodoItem.style.textDecoration = 'line-through';
        targetTodoItem.isCompleted = true;
    } else {
        targetTodoItem.style.textDecoration = 'none';
        targetTodoItem.isCompleted = false;
    }

    // Loop through savedTodos array, then check for the matching ID.
    // If there's matching ID, toggle the isCompleted property of this todo item.
    // Then overwrite your local storage with the updated list.
    for (let i = 0; i < savedTodos.length; i++) {
        // using == because the id in the DOM is a string, but the id in the array is a number.
        if (savedTodos[i].id == targetTodoItem.id) {
            savedTodos[i].isCompleted = targetTodoItem.isCompleted;
            localStorage.setItem('todos', JSON.stringify(savedTodos));
            break; //  exit the loop once we found the matching ID.
        }
    }
}