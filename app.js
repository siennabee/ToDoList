const removeButtons = document.getElementsByClassName("remove");
const markComplete = document.getElementsByClassName("complete");
const submitTodo = document.getElementsByClassName("submit");

for (let btn of removeButtons) {
    btn.addEventListener("click", function(e) {
        e.target.parentElement.remove();
    });
}

for (let btn of markComplete) {
    btn.addEventListener("click", function(e) {
        e.target.parentElement.style.textDecoration = "line-through";
    });
}

for (let btn of submitTodo) {
    btn.addEventListener("click", function(e) {
        e.target.parentElement.style.textDecoration = "line-through";
    });
}

input.addEventListener("addTodo", function(e){
    e.preventDefault();
    const newListItem = document.createElement("li");
})