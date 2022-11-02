import { Todo } from "./todo";

// creating objects
let todos = [
  new Todo("Handla Mat", false),
  new Todo("Springa/Träna", false),
  new Todo("Uppdatera din portfolio", false),
  new Todo("Laga matlådor", false),
];
// pushing the new objects into a list
let todoList = [];
for (let i = 0; i < todos.length; i++) {
  todoList.push(todos[i]);
}

// Getting the article tag.
const todoListContainer = document.getElementById("todoListDisplay");
// input and button
const inputTask = document.getElementById("task");
const buttonTask = document.getElementById("addTask");

displayTodoList();

buttonTask.addEventListener("click", createTodo);
// Create a todo
function createTodo() {
  const newTodo = new Todo(inputTask.value, false);
  todoList.push(newTodo);

  inputTask.value = "";
  displayTodoList(newTodo);
}

// Adding objects to the list
function displayTodoList() {
  // clear when adding new item to list
  todoListContainer.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    // create elements too display the list.
    const listItemContainer = document.createElement("div");
    listItemContainer.classList.add("card__task");
    // task-checked
    const listItemChecked = document.createElement("input");
    listItemChecked.classList.add("card__task--check");
    listItemChecked.type = "checkbox";
    // task-name
    const listItemTask = document.createElement("p");
    listItemTask.classList.add("card__task--name");
    // task-done
    const listItemRemove = document.createElement("span");
    listItemRemove.classList.add("card__task--remove");
    /*
    listItemChecked.addEventListener("click", () => {
      if (listItemChecked.checked === true) {
        todoList[i].completed = true;
        console.log(todoList);
      } else {
        todoList[i].completed = false;
        console.log(todoList);
      }
    });
    */
    listItemTask.addEventListener("click", () => {
      if (listItemTask.checked === true) {
        todoList[i].completed = true;
        console.log(todoList);
      } else {
        todoList[i].completed = false;
        console.log(todoList);
      }
    });

    listItemRemove.addEventListener("click", () => {
      todoList.splice([i], 1);
      console.log(todoList);
      displayTodoList();
    });

    // what each element should display.
    listItemRemove.innerHTML = `<i class="bi bi-x-lg"></i>`;
    listItemTask.innerText += todoList[i].task;

    // appended all the elements in the right order.
    listItemContainer.appendChild(listItemTask);
    listItemContainer.appendChild(listItemChecked);
    listItemContainer.appendChild(listItemRemove);
    todoListContainer.appendChild(listItemContainer);
  }

  // just to see what happends
  console.log(todoList);
}
