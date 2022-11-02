import { Todo } from "./todo";

// List with Incomplete Objects
let todoList = [
  new Todo("Handla Mat", false),
  new Todo("Springa/Träna", false),
  new Todo("Uppdatera din portfolio", false),
  new Todo("Laga matlådor", false),
];

// Getting the article tag.
let todoListIncomplete = document.getElementById("todoListIncomplete");
// Add objects done to new list???
//let todoListComplete = document.getElementById("todoListComplete");

// input and button
document.getElementById("addTask").addEventListener("click", () => {
  createTodo(document.getElementById("task").value);
});

// Create a todo
function createTodo(todoNew, completedNew) {
  let newTodo = new Todo(todoNew, (completedNew = false));
  todoList.push(newTodo);
  addTodo(newTodo);
}

// Adding objects to the list
function addTodo(todo) {
  const listItem = document.createElement("p");
  listItem.classList.add("content__list--item");
  if (todo.completed === false) {
    todoListIncomplete.appendChild(listItem);
  }
  listItem.innerText = todo.task;
  // just to see what happends
  console.log(todoList);
}

function doneTodo(todo) {
  for (let i = 0; i < todoList.length; i++) {
    if (todo[i].completed === true) {
      console.log("klar");
    } else {
      console.log("inte klar");
    }
  }
}

// Loops the list
for (let i = 0; i < todoList.length; i++) {
  const listItem = document.createElement("p");
  listItem.addEventListener(() => {
    doneTodo(todo);
  });
  listItem.classList.add("content__list--item");
  listItem.innerText += todoList[i].task;
  todoListIncomplete.appendChild(listItem);
}

done.addEventListener("click", () => {
  if (done.checked === true) {
    text.classList.add("done");

    console.log("du kryssade i done");
  } else {
    text.classList.remove("done");
  }
});
// Function to mark object done.
// veta vad som är klart.
