import './TodoItem.css';

function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className="todo-item">
      <button
        onClick={onComplete}
        className={`check ${completed && "check--active"}`}
      ></button>
      <p>{text}</p>
      <button onClick={onDelete} className="close-item"></button>
    </li>
  );
}

export { TodoItem };