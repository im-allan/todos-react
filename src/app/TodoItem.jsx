export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li
      className={`list-group-item list-group-item-action d-flex justify-content-between module ${
        todo.done ? "list-group-item-success" : ""
      }`}
      onClick={() => onToggleTodo(todo.id)}
    >
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
      >
        {todo.description}
      </span>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => onDeleteTodo(todo.id)}
      >
        {" "}
        Borrar{" "}
      </button>
    </li>
  );
};
