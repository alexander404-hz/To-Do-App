import { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../../context/TodoContext";

function CreateTodoButton() {
  const { handleAddTodo, hasNoResults = false } = useContext(TodoContext);

  return (
    <button
      className={`create-todo-button ${hasNoResults ? "create-todo-button--highlight" : ""}`}
      onClick={handleAddTodo}
      title={hasNoResults ? "Agregar este TODO" : "Agregar TODO"}
      aria-label={hasNoResults ? "Agregar este TODO" : "Agregar TODO"}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
