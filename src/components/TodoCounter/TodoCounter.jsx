import "./TodoCounter.css";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

function getCounterMessage(total, completed) {
  if (total === 0) return "¡Crea tu primer To-Do!";
  if (completed === total)
    return "¡Felicidades! Completaste todos los To-Do's 🎉";
  return `Has completado ${completed} de ${total} To-Do's`;
}

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);

  const message = getCounterMessage(totalTodos, completedTodos);

  return (
    <header className="todo-counter">
      <p className="todo-counter__label">Tus To-Do's</p>
      <h1>{message}</h1>
    </header>
  );
}

export { TodoCounter };
