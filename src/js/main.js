import { Todo } from "./todo";

// List with Incomplete Objects
let todoList = [
  new Todo("Handla Mat", false),
  new Todo("Springa/Träna", false),
  new Todo("Uppdatera din portfolio", false),
  new Todo("Laga matlådor", false),
];

// List with Completed objects
let todoListIncomplete = document.getElementById("todoListIncomplete");
let todoListComplete = document.getElementById("todoListComplete");

// input and button
document.getElementById("addTask").addEventListener("click", () => {
  createTodo(document.getElementById("task").value);
});
// Create a todo
function createTodo(todo, completed) {
  let newTodo = new Todo(todo, (completed = false));
  todoList.push(newTodo);
  addTodo(newTodo);
}

// Adding objects to the list
function addTodo(todo) {
  const listItem = document.createElement("p");
  listItem.classList.add("content__list--item");

  if (todo.completed === false) {
    todoListIncomplete.appendChild(listItem);
  } else {
    todoListComplete.appendChild(listItem);
  }
  listItem.innerText = todo.task;
  // just to see what happends
  console.log(todoList);
}

// loops the list
for (let i = 0; i < todoList.length; i++) {
  const listItem = document.createElement("p");

  listItem.classList.add("content__list--item");
  listItem.innerText += todoList[i].task;

  todoListIncomplete.appendChild(listItem);
}
