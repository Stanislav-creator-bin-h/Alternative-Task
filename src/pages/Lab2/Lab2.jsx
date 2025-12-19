import './Lab2.css';
import TodoList from './components/TodoList';

import { useThemeStore } from "../../store/useThemeStore";

const Lab2 = () => {
  const mode = useThemeStore((state) => state.mode);

  return (
    <div className={`lab2-wrapper ${mode}`}>
      <div className="todo-container">
        <TodoList />
      </div>

    </div>
  );
};

export default Lab2;