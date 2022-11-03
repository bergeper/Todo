import { Todo } from "./models/todo";

// to use localStorage everytime

// creating objects to have in list when starting the project
let todoList = [];

window.addEventListener("load", () => {
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

buttonTask.addEventListener("click", createTodo);
// Create a todo
function createTodo() {
  const newTodo = new Todo(inputTask.value, false);
  todoList.push(newTodo);
  localStorage.setItem("TodoList", JSON.stringify(todoList));
  inputTask.value = "";
  createTodoList(newTodo);
}

// Adding objects to the list
function createTodoList() {
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
    listItemChecked.checked = todoList[i].completed;

    // task-name
    const listItemTask = document.createElement("p");
    listItemTask.classList.add("card__task--name");
    // task-done
    const listItemRemove = document.createElement("span");
    listItemRemove.classList.add("card__task--remove");

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
    listItemRemove.innerHTML = `<i class="bi bi-x-lg"></i>`;
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
