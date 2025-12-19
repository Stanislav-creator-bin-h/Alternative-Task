import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import { useTodos } from "../hooks/useTodos";

function TodoList() {
  const {
    todos,
    isLoading,
    error,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodoTitle,
    searchTerm,
    setSearchTerm,
    currentPage,
    goToNextPage,
    goToPrevPage,
    totalTodos,
    limitPerPage,
  } = useTodos();

  if (isLoading) return <p role="status">Завантаження...</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <section className="todo-container">
      <h1>To-Do List</h1>

      <AddTodoForm onAddTodo={addTodo} />

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {todos.length === 0 ? (
        <p className="text-muted">Нічого не знайдено</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              task={todo}
              onDelete={deleteTodo}
              onToggle={toggleTodo}
              onEdit={editTodoTitle}
            />
          ))}
        </ul>
      )}

      <Pagination
        currentPage={currentPage}
        totalTodos={totalTodos}
        limit={limitPerPage}
        onNext={goToNextPage}
        onPrev={goToPrevPage}
      />
    </section>
  );
}

export default TodoList;
