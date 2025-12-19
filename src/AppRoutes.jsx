import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Lab1 from "./pages/Lab1/Lab1";
import Lab2 from "./pages/Lab2/Lab2";
import Lab3 from "./pages/Lab3/Lab3";
import TodoList from "./pages/TodoList/TodoList";
import NotFound from "./pages/NotFound";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="lab1" element={<Lab1 />} />
        <Route path="lab2" element={<Lab2 />} />
        <Route path="lab3" element={<Lab3 />} />
        <Route path="todo-list" element={<TodoList />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
