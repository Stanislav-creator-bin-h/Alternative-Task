import { memo, useState } from "react";

const TodoItem = memo(function TodoItem({
  task,
  onDelete,
  onToggle,
  onEdit,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.todo);

  const handleSave = () => {
    const trimmed = newTitle.trim();
    if (trimmed && trimmed !== task.todo) {
      onEdit(task.id, trimmed);
    }
    setIsEditing(false);
  };

  return (
    <li aria-label={`Завдання: ${task.todo}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label="Позначити як виконане"
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            aria-label="Редагування завдання"
          />
          <button onClick={handleSave}>Зберегти</button>
        </>
      ) : (
        <>
          <span className={task.completed ? "completed" : ""}>
            {task.todo}
          </span>
          <button onClick={() => setIsEditing(true)}>Редагувати</button>
        </>
      )}

      <button onClick={() => onDelete(task.id)} aria-label="Видалити завдання">
        ✕
      </button>
    </li>
  );
});

export default TodoItem;
