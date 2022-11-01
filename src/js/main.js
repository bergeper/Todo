import { Todo } from "./todo";

// List with Incomplete Objects
let todoList = [
  new Todo(1, "Handla Mat", false),
  new Todo(2, "Springa/Träna", false),
  new Todo(3, "Uppdatera din portfolio", false),
  new Todo(4, "Laga matlådor", false),
];

// List with Completed objects
let todoListDone = [];

todoListIncomplete = document.getElementById("todoListIncomplete");
todoListComplete = document.getElementById("todoListComplete");
document.getElementById("task").value;

for (let i = 0; i < todoList.length; i++) {
  const listItem = document.createElement("p");

  listItem.classList.add("content__list--item");
  listItem.innerText += todoList[i].task;

  todoListIncomplete.appendChild(listItem);
}
