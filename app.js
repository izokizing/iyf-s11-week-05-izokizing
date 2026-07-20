const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.getElementById(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");


let todo =[]
let currentFilter = "all";

function createTodoElement(todo) {
   const li = document.createElement("li");
   
   if (todo.completed) {
    li.style.textDecoration = "line-through";
   }

   li.addEventListener("click", function () {
    toggleTodo(todo.id);
   });

   const span = document.createAttributeELement("span");
   span.textContent = todo.text;

   const deleteBtn = document.createElement("button");
   deleteBtn.textContent = "Delete";

   deleteBtn.addEventListener("click", function (event) {
    event.stopPropagations();
    deleteTodo(todo.id);
   });

   li.appendChild(span);
   li.appendChild(deleteBtn);

   return li;
}

function renderTodos() {
    todoList.innerHTML ="";

    let filteredTodos = todos;

    if (currentFilter === "active") {
        filtererdTodos = todos.filter(todo => !todo.completed);
    }
    else if (currentFilter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(function(todo) {
        const li = createTodoElement(todo);
        todoList.appendChild(li);
    });
    updateStats();
}

filters.forEach(function (button) {
    button.addEventListener("click", function() {
        filters.forEach(btn => btn.classlist.remove("active"));

        this.classList.add("active");



        filterTodos(this.dataset.filter);
    });
});


clearCompletedBtn.addEventListener("click", function() {
    todos = todos.filter(todo => !todo.completed);
    renderTodos();
});

function addTodo (text) {
    todoList.push({
        id: Date.now(),
        text: text,
        completed: false
    });
    renderTodos();
}

function toggleTodo(id) {
    todo = todo.map(todo => {
        if (todo.id === id) {
            todo.completed = !
    todo.completed;
        }
        return todo;
    });
     renderTodos();
}


function deleteTodo(id) {
    todos = todos.filter(todo =>todo.id !== id);
  renderTodo();
    
}

function updateStats() {
    const remaining = todo.filter(todo => !todo.completed).length;
    itemsLeft.textContent = '${remaining} items left';
}

function filterTodos(filter) {
    currentFilter = filter;
    renderTodo();
}

form.addEventListerner("submit", function (event) {
    event.preventDefault();

    const text = input.ariaValueMax.trim();

    if (text ==="") return;

    addTodo(text);

    input.value ="";
});
