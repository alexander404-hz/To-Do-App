import { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../../context/TodoContext";

function getSearchMessage(totalTodos) {
  if (totalTodos === 0) return "¡Agrega tu primer To-Do aqui!";
  return "Buscar o agregar un To-Do...";
}

function TodoSearch() {
  const { searchValue, handleChangeSearchValue, totalTodos } =
    useContext(TodoContext);

  const message = getSearchMessage(totalTodos);

  return (
    <input
      className="todo-search"
      type="text"
      placeholder={message}
      aria-label={message}
      value={searchValue}
      onChange={handleChangeSearchValue}
    />
  );
}

export { TodoSearch };
