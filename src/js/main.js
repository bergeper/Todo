import { Todo } from "./todo";

// List with Incomplete Objects
let todoList = [
  new Todo("Handla mat", false),
  new Todo("Springa/Träna", false),
  new Todo("Uppdatera din portfolio", false),
  new Todo("Laga matlådor", false),
];

// List with Completed objects
let todoListDone = [];

todoListIncomplete = document.getElementById("todoListIncomplete");
todoListComplete = document.getElementById("todoListComplete");
addTaskToList = document.getElementById("task").value;

for (let i = 0; i < todoList.length; i++) {
  const listItem = document.createElement("p");
  listItem.classList.add("content__list--item");
  listItem.innerText += todoList[i].task;

  todoListIncomplete.appendChild(listItem);
  // Click on object to remove it from the list. (Mark it done)
  listItem.addEventListener("click", () => {
    addTask(todoList[i]);
  });
}

// add Object to list
function addTask(task) {
  todoList.push(task);
  console.log(todoList);
}

for (let i = 0; i < todoListComplete.length; i++) {}
