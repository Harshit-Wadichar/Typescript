import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import TodoItem from "./components/TodoItem";
import { useEffect, useState, type FormEvent } from "react";
import { type TodoItemType } from "./types";
import { getTodos, saveTodos } from "./utils/features";

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>(getTodos());
  const [title, setTitle] = useState<TodoItemType["title"]>("");

  const completeHandler = (id: TodoItemType["id"]): void => {
    const newTodos: TodoItemType[] = todos.map((i) => {
      if(i.id === id) i.isCompleted = !i.isCompleted;
      return i;
    })
    setTodos(newTodos);
  };
  const deleteHandler = (id: TodoItemType["id"]): void => {
    const newTodos: TodoItemType[] = todos.filter((i) => i.id !== id);
    setTodos(newTodos); 
  };

  const editHandler = (id: TodoItemType["id"], title: TodoItemType["title"]) => {
    const newTodos: TodoItemType[] = todos.map((i) => {
      if(i.id === id) i.title = title;
      return i;
    })
    setTodos(newTodos);
  }

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    const newTodo: TodoItemType = {
      title: title,
      isCompleted: false,
      id: String(Math.random()*1000)
    }
    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
  };

  useEffect(() => {
    saveTodos(todos);
  }, [todos])
  return (
    <Container maxWidth="sm" sx={{ height: "90vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>Todo App</Typography>
        </Toolbar>
      </AppBar>
      <Stack height={"80%"} direction={"column"} spacing={"1rem"} p={"1rem"} sx={{overflowY: "scroll"}}>
        {todos.map((i) => (
          <TodoItem
            completeHandler={completeHandler}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            key={i.id}
            todo={i}
          />
        ))}
      </Stack>
      <form onSubmit={submitHandler}>
        <TextField fullWidth label={"New Task"} value={title} onChange={(e) => setTitle(e.target.value)}/>
        <Button disabled={title === ""} onClick={submitHandler} sx={{ marginTop: "1rem" }} fullWidth variant="contained">
          ADD
        </Button>
      </form>
    </Container>
  );
};

export default App;
