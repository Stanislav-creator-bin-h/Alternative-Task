import { create } from "zustand";

export const useTodoStore = create((set) => ({
  todos: [],
  isLoading: false,
  error: null,

  fetchTodos: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch('https://dummyjson.com/todos');
      const data = await response.json();

      const formattedTodos = data.todos.map(item => ({
        id: item.id,
        text: item.todo,
        completed: item.completed
      }));

      set({ todos: formattedTodos, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  addTodo: (text) =>
    set((state) => ({
      todos: [
        { id: Date.now(), text, completed: false },
        ...state.todos,
      ],
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      ),
    })),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));