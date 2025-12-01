import {
  Button,
  Checkbox,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import type { TodoItemType } from "../types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";

type PropsType = {
  todo: TodoItemType;
  completeHandler: (id: TodoItemType["id"]) => void;
  deleteHandler: (id: TodoItemType["id"]) => void;
  editHandler: (id: TodoItemType["id"], title: TodoItemType["title"]) => void;
};

const TodoItem = ({
  todo,
  completeHandler,
  deleteHandler,
  editHandler,
}: PropsType) => {
  const [editActive, setEditActive] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(todo.title);
  return (
    <Paper sx={{ padding: "1rem" }}>
      <Stack direction={"row"} alignItems={"center"}>
        {editActive ? (
          <TextField
            sx={{ marginRight: "auto" }}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && newTitle !== "") {
                editHandler(todo.id, newTitle);
                setEditActive(false);
              }
            }}
          />
        ) : (
          <Typography marginRight={"auto"}>{todo.title}</Typography>
        )}

        <Checkbox
          checked={todo.isCompleted}
          onChange={() => completeHandler(todo.id)}
        />
        {editActive ? (
          <Button disabled={newTitle === ""}
            onClick={() => {
              editHandler(todo.id, newTitle);
              setEditActive(false);
            }}
          >
            <DoneIcon />
          </Button>
        ) : (
          <Button onClick={() => setEditActive((prev) => !prev)}>
            <EditIcon />
          </Button>
        )}
        <Button onClick={() => deleteHandler(todo.id)}>
          <DeleteIcon />
        </Button>
      </Stack>
    </Paper>
  );
};

export default TodoItem;
