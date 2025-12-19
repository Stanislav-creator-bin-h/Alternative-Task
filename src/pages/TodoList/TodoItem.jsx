import { Checkbox, IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useTodoStore } from "../../store/useTodoStore";

function TodoItem({ todo }) {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="Видалити завдання"
          onClick={() => removeTodo(todo.id)}
        >
          <DeleteOutlineIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        inputProps={{ "aria-label": "Позначити як виконане" }}
      />

      <ListItemText
        primary={todo.text}
        primaryTypographyProps={{
          sx: {
            textDecoration: todo.completed ? "line-through" : "none",
            color: todo.completed ? "text.secondary" : "text.primary",
            wordBreak: "break-word",
          },
        }}
      />
    </ListItem>
  );
}

export default TodoItem;
