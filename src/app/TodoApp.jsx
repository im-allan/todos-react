import { useReducer, useEffect } from "react";
import { TodoList, TodoAdd, ToggleTheme } from "./index";
import { useTodos } from "../hooks/useTodos";
export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleToggleTodo,
    handleRemoveTodo,
  } = useTodos();

  return (
    <>
      <ToggleTheme />
      <h1 className="text-center mt-5">TodoApp</h1>
      <div className="shadow container col-2 position-absolute top-0 end-0 z-0 bg-primary pt-2 rounded-1 todos__count ">
        <small className="text-light text-center">
          Tareas: {todosCount}
          <hr />
          Pendientes: {pendingTodosCount}
        </small>
      </div>
      <div className="shadow container col-10 mb-5 module rounded-1">
        <h4 className="pt-3 pb-3">Agregar Tarea</h4>
        <TodoAdd onNewTodo={handleNewTodo} />
      </div>
      <div
        className={` ${
          todos.length >= 1
            ? "shadow container col-10 p-3 module rounded-1"
            : ""
        }`}
      >
        <div className="">
          <TodoList
            todos={todos}
            onDeleteTodo={handleRemoveTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
      </div>
    </>
  );
};
