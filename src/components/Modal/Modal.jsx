import "./Modal.css";
import { useContext } from "react";
import { createPortal } from "react-dom";
import { TodoContext } from "../../context/TodoContext";

function Modal() {
  const { openModal: modal } = useContext(TodoContext);

  if (!modal) return null;

  const modalElement = document.querySelector("#modal");

  const handleOverlayClick = () => {
    const close = modal.onCancel || modal.onConfirm;
    close?.();
  };
  const handleContentClick = (e) => e.stopPropagation();

  return createPortal(
    <div className={`modal modal--${modal.type}`} onClick={handleOverlayClick}>
      <div className="modal-content" onClick={handleContentClick}>
        <span>{modal.text}</span>

        <div className="modal-actions">
          {modal.onConfirm && (
            <button onClick={modal.onConfirm}>
              {modal.confirmText || "Aceptar"}
            </button>
          )}

          {modal.onCancel && (
            <button onClick={modal.onCancel}>
              {modal.cancelText || "Cancelar"}
            </button>
          )}
        </div>
      </div>
    </div>,
    modalElement,
  );
}

export { Modal };
