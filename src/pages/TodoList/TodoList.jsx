import { useEffect, useState } from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  List,
  Stack,
  CircularProgress,
  Box,
  Divider,
} from "@mui/material";
import TodoItem from "./TodoItem";
import { useTodoStore } from "../../store/useTodoStore";

function TodoList() {
  const [text, setText] = useState("");

  const {
    todos,
    addTodo,
    fetchTodos,
    isLoading,
  } = useTodoStore();

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    addTodo(trimmed);
    setText("");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
        Tasks
      </Typography>

      <Typography
        variant="body2"
        align="center"
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Simple task manager with Zustand store
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <TextField
          fullWidth
          label="New task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />

        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </Stack>

      <Divider sx={{ mb: 2 }} />

      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress />
        </Box>
      ) : todos.length === 0 ? (
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ py: 3 }}
        >
          No tasks yet. Add your first one 👆
        </Typography>
      ) : (
        <List>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </List>
      )}
    </Container>
  );
}

export default TodoList;
