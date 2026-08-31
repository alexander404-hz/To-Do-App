import "./TodoFeedback.css";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

function TodoFeedback() {
  const { displayFeedback: feedback } = useContext(TodoContext);

  if (!feedback) return;

  return (
    <span className={`todo-${feedback.type}`}>
      {feedback.text}
      <br />
      <small>{feedback.description}</small>
    </span>
  );
}

export { TodoFeedback };
