import { memo, useState } from "react";

const AddTodoForm = memo(function AddTodoForm({ onAddTodo }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = task.trim();
    if (!trimmed) return;

    onAddTodo(trimmed);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Форма додавання завдання">
      <input
        type="text"
        placeholder="Введіть завдання…"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        aria-label="Назва завдання"
      />

      <button type="submit" disabled={!task.trim()}>
        Додати
      </button>
    </form>
  );
});

export default AddTodoForm;
