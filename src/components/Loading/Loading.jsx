import "./Loading.css";

function Loading() {
  return (
    <div className="todo-loading" aria-live="polite" aria-busy="true">
      <div className="todo-loading__spinner" aria-hidden="true" />
      <div className="todo-loading__content">
        <p className="todo-loading__label">Cargando TODOs...</p>
        <div className="todo-loading__skeletons" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

export { Loading };
