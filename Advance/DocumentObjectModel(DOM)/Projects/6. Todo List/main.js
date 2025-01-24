// let form = document.querySelector("form");
// let input = document.querySelector("input");
// let todos = document.querySelector(".todos");

// function getTodo(value) {
//   // Creating New Elements
//   let todo = document.createElement("div");
//   let textEl = document.createElement("span");

//   // Setting values & Styles
//   textEl.innerHTML = value;

//   // Appending Our Element To The DOM
//   todo.appendChild(textEl);

//   let closeEl = document.createElement("span");
//   closeEl.innerHTML = "&times;";
//   closeEl.classList.add("delete");

//   // Attaching Events
//   closeEl.addEventListener("click", function (e) {
//     todos.removeChild(todo);
//   });

//   todo.appendChild(closeEl);
//   todo.classList.add("todo");
//   return todo;
// }

// form.addEventListener("submit", (e) => {
//   // preventing the default behavior
//   e.preventDefault();
//   let value = input.value;
//   if (!value.trim()) return;
//   todos.appendChild(getTodo(value));
//   input.value = "";
// });

//getting all the elements
let form = document.querySelector("form");
let input = document.querySelector("input");
let todolist = document.querySelector(".todos");

function getTodo(value) {
  let todo = document.createElement("div");
  let textEl = document.createElement("span");

  textEl.innerHTML = value;

  todo.appendChild(textEl);

  let closeEl = document.createElement("span");
  closeEl.innerHTML = "&times";
  closeEl.classList.add("delete"); //adding css

  closeEl.addEventListener("click", () => {
    todolist.removeChild(todo);
  });

  todo.appendChild(closeEl);
  todo.classList.add("todo");//<div class="todo">

  return todo;
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); //while submiting the data should not move like a flash so for this we use this.

  let value = input.value;

  if (!value.trim()) return;
  //Removes the leading and trailing white space and line terminator characters from a string.

  todolist.appendChild(getTodo(value));
  console.log(todolist)
  input.value = "";//to clear the input box instantly
});
