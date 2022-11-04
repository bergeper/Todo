import { Todo } from "./models/todo";

let todoList = [];
// waiting for the whole page to load before executing
window.addEventListener("load", () => {
  // Looping the TodoList from LS to create objects with the class Todo
  todoList = JSON.parse(localStorage.getItem("TodoList")).map((todo) => {
    return new Todo(todo.task, todo.completed);
  });
  createTodoList();
});

// Getting the article tag.
const todoListContainer = document.getElementById("todoListDisplay");
// input and button
const inputTask = document.getElementById("task");
const buttonTask = document.getElementById("addTask");
// sort button
const buttonSort = document.getElementById("sortTask");

buttonTask.addEventListener("click", createTodo);
// Create a todo
function createTodo() {
  const newTodo = new Todo(inputTask.value, false);
  todoList.push(newTodo);
  localStorage.setItem("TodoList", JSON.stringify(todoList));
  inputTask.value = "";
  createTodoList(newTodo);
}

buttonSort.addEventListener("click", sortTodos);

function sortTodos(sortTodo) {
  sortTodo = todoList.reverse();

  createTodoList();
}
/*
function sortTodos() {
  todoList.sort((a, b) => (a.task > b.task ? 1 : -1));
  createTodoList();
}
*/
// Adding objects to the list
function createTodoList() {
  // clear when adding new item to list
  todoListContainer.innerHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    // create elements too display the list.
    const listItemContainer = document.createElement("div");
    listItemContainer.classList.add("card__task");

    // task-name
    const listItemTask = document.createElement("p");
    listItemTask.classList.add("card__task--name");
    // task-done
    const listItemRemove = document.createElement("span");
    listItemRemove.classList.add("card__task--remove");

    // task-checked
    const listItemChecked = document.createElement("input");
    listItemChecked.classList.add("card__task--check");
    listItemChecked.type = "checkbox";
    listItemChecked.checked = todoList[i].completed;
    // To mark object as done.
    listItemChecked.addEventListener("change", () => {
      if (listItemChecked.checked === true) {
        todoList[i].completed = true;
        // Just to see that the object actually go true.
        console.log(todoList);
      } else {
        todoList[i].completed = false;
        // Just to see that the object actually go false.
        console.log(todoList);
      }
      localStorage.setItem("TodoList", JSON.stringify(todoList));
    });

    // remove item on position
    listItemRemove.addEventListener("click", () => {
      todoList.splice([i], 1);
      localStorage.setItem("TodoList", JSON.stringify(todoList));
      console.log(todoList);
      createTodoList();
    });

    // what each element should display.
    listItemRemove.innerHTML = `<i class="bi bi-x-square-fill"></i>`;
    listItemTask.innerText += todoList[i].task;

    // appended all the elements in the right order.
    listItemContainer.appendChild(listItemChecked);
    listItemContainer.appendChild(listItemTask);
    listItemContainer.appendChild(listItemRemove);
    todoListContainer.appendChild(listItemContainer);

    // TODO -> ADD a sorting button
  }

  // just to see what happends
  console.log(todoList);
}
