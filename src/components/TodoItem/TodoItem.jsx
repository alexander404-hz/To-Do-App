import "./TodoItem.css";

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="todo-item">
      <div className="todo-item__content">
        <input
          type="checkbox"
          checked={completed}
          readOnly
          className={`todo-item__checkbox ${completed ? "todo-item__checkbox--done" : ""}`}
          title={
            completed ? "Marcar como No completado" : "Marcar como completado"
          }
          aria-label={`Marcar ${text} como ${completed ? "No" : ""} completado`}
          onClick={onComplete}
        />
        <p
          className={`todo-item__text ${completed ? "todo-item__text--completed" : ""}`}
        >
          {text}
        </p>
      </div>

      <button
        className="todo-item__delete"
        aria-label={`Eliminar ${text}`}
        onClick={onDelete}
      >
        ×
      </button>
    </li>
  );
}

export { TodoItem };
