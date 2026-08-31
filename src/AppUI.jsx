import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { TodoFeedback } from "./components/TodoFeedback";
import { Loading } from "./components/Loading";
import { TodoContext } from "./context/TodoContext";
import { useContext } from "react";
import { Modal } from "./components/Modal";

function AppUI() {
  const { isLoading, searchedTodos, completeTodo, handleDeleteTodo } =
    useContext(TodoContext);

  return (
    <>
      <main className="app">
        {!isLoading ? (
          <>
            <TodoCounter />

            <div className="todo-toolbar">
              <TodoSearch />
              <CreateTodoButton />
            </div>
          </>
        ) : (
          ""
        )}

        <TodoList>
          <TodoFeedback />

          {isLoading ? <Loading /> : ""}

          {!isLoading
            ? searchedTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.id)}
                  onDelete={() => handleDeleteTodo(todo.id)}
                />
              ))
            : ""}
        </TodoList>
      </main>

      <Modal></Modal>
    </>
  );
}

export { AppUI };
