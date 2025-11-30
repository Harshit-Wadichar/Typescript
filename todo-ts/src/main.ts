import "./style.css";

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}

const todos: Array<Todo> = [];

const todosContainer = document.querySelector(
  ".todoContainer"
) as HTMLDivElement;
const todoInput = document.getElementsByName("title")[0] as HTMLInputElement;
const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.random() * 1000),
  };
  todos.push(todo);
  todoInput.value = "";
  renderTodos(todos);
};

const generateTodoItem = (title: string, isCompleted: boolean, id: string) => {
  const todo: HTMLDivElement = document.createElement("div");
  todo.className = "todo";

  // Creating a checkbox
  const checkBox: HTMLInputElement = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = isCompleted;
  checkBox.onchange = () => {
    todos.find(item => {
      if(item.id === id) {
        item.isCompleted = checkBox.checked
      }
    })
    paragraph.className = checkBox.checked ? "textCut" : "";
  };

  // Creating Paragraph for title
  const paragraph: HTMLParagraphElement = document.createElement("p");
  paragraph.innerText = title;
  paragraph.className = isCompleted ? "textCut" : "";  

  // Creating a Delete Button
  const btn: HTMLButtonElement = document.createElement("button");
  btn.className = "deleteBtn";
  btn.innerText = "X";
  btn.onclick = () => {
    deleteTodo(id);
  };

  // Appending All elements in todo
  todo.append(checkBox, paragraph, btn);
  todosContainer.append(todo);
};

const deleteTodo = (id: string) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  todos.splice(idx, 1);
  renderTodos(todos);
};

const renderTodos = (todos: Todo[]) => {
  todosContainer.innerText = "";
  todos.forEach((todo) => {
    generateTodoItem(todo.title, todo.isCompleted, todo.id);
  });
};
