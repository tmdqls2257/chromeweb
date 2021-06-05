const ToDoForm = document.querySelector(".js-toDoForm"),
  Input = ToDoForm.querySelector("input"),
  ToDoList = document.querySelector(".js-toDolist")

const ToDoForm_ls = 'todos';

function loadtodos(){
const todos = localStorage.getItem(ToDoForm_ls);
}

function init(){
loadtodos();
}
init();