import { createContext, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocaleStorage";
import { useDebounce } from "../../hooks/useDebounce";

// Función para limpiar tildes y mayúsculas
const normalizeText = (texto) =>
  texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

const TodoContext = createContext();

function TodoProvider({ children }) {
  // --- State ---

  const {
    item: todos,
    saveItem: setTodos,
    isLoading,
    errorMsg,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 300);
  const [feedback, setFeedback] = useState(null);
  const [openModal, setOpenModal] = useState(null);

  // --- Derived values ---

  const totalTodos = todos.length;
  const completedTodos = todos.reduce(
    (count, todo) => (todo.completed ? count + 1 : count),
    0,
  );

  const searchedTodos = todos.filter((todo) => {
    const todoText = normalizeText(todo.text);
    const todoSearch = normalizeText(debouncedSearchValue);

    return todoText.includes(todoSearch);
  });

  const totalSearchedTodos = searchedTodos.length;

  const hasNoResults =
    debouncedSearchValue && searchedTodos.length === 0 && totalTodos !== 0;

  const displayFeedback =
    errorMsg ??
    feedback ??
    (hasNoResults
      ? {
          type: "info",
          text: "No se encontraron resultados",
          description: `Presiona "+" para agregar "${searchValue}" como nuevo TODO`,
        }
      : null);

  // --- Business logic ---

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);

    newTodos.splice(todoIndex, 1);

    setTodos(newTodos);
  };

  const addTodo = (text) => {
    const trimmedText = text.trim();

    if (normalizeText(trimmedText) === "") {
      setFeedback({
        type: "error",
        text: "El campo no puede estar vacio",
        description: "Para poder agregar un TODO :)",
      });

      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      text: trimmedText,
      completed: false,
    };

    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
  };

  const closeModal = () => setOpenModal(null);

  // --- Handlers ---

  const handleChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
    if (feedback) setFeedback(null);
  };

  const handleAddTodo = () => {
    addTodo(searchValue);
    setSearchValue("");
  };

  const handleDeleteTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);

    setOpenModal({
      type: "question",
      text: `¿Estás seguro de eliminar el TODO: ${todo.text}?`,
      confirmText: "Sí, eliminar",
      cancelText: "No, cancelar",
      onConfirm: () => {
        deleteTodo(id);
        closeModal();
      },
      onCancel: closeModal,
    });
  };

  //Plantilla para info
  const showInfoModal = (text) => {
    setOpenModal({
      type: "info",
      text,
      confirmText: "Entendido",
      onConfirm: closeModal,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        totalTodos,
        completedTodos,
        searchValue,
        handleChangeSearchValue,
        handleAddTodo,
        displayFeedback,
        hasNoResults,
        totalSearchedTodos,
        searchedTodos,
        completeTodo,
        handleDeleteTodo,
        isLoading,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
